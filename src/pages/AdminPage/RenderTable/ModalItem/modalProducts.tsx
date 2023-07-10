import { Form, Input, InputNumber, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import ListColorPicker from "./colorPicker";
import { storageRef } from "../../../../firebase.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import productApi from "../../../../api/productApi";

const ModalItem = (props: any) => {
  const { isModalOpen, handleOk, handleCancel, detail, isEdit } = props;
  const [newImage, setNewImage] = useState({});

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const initialValue = {
    id: detail.id,
    name: "",
    description: "",
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  useEffect(() => {
    form.setFieldValue("name", detail?.name || "");
    form.setFieldValue("description", detail?.description || "");
    form.setFieldValue("price", detail?.price || 0);
    form.setFieldValue("color", detail?.color || []);
    form.setFieldValue("image_url", detail?.image_url || []);
  }, [detail, form]);

  const normFile = (e: any) => {
    const currentArrayImage = form.getFieldValue("image_url");
    return currentArrayImage;
  };

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={onOk}
      onCancel={handleCancel}
      width={800}
      centered
      destroyOnClose
    >
      <Form
        {...layout}
        initialValues={initialValue}
        form={form}
        preserve={false}
        onFinish={async (val) => {
          await productApi.updateProductById(detail.id, val);
          handleOk();
        }}
      >
        <Form.Item name={"name"} label={"Name"}>
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label={"Description"}>
          <TextArea />
        </Form.Item>
        <Form.Item
          name={"image_url"}
          label={"Image"}
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            accept="image/*"
            listType="picture-card"
            onChange={(e: any) => {
              const { file } = e;
              if (file.status === "removed") {
                form.setFieldValue("image_url", e.fileList);
                return;
              }
              const fileName = `uploads/images/${Date.now()}-${file.name}`;
              const fileRef = ref(storageRef, fileName);
              const uploadTask = uploadBytesResumable(
                fileRef,
                file.originFileObj
              );
              try {
                uploadTask.on(
                  "state_changed",
                  () => {},
                  (error) => {
                    alert(error);
                  },
                  () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                      (downloadURL) => {
                        setNewImage({
                          name: file.name,
                          url: downloadURL,
                        });
                        const currentValue = form.getFieldValue("image_url");
                        currentValue.push({
                          name: file.name,
                          url: downloadURL,
                        });
                        form.setFieldValue("image_url", currentValue);
                      }
                    );
                  }
                );
              } catch (e) {
                console.log(e);
              }
            }}
          >
            {uploadButton}
          </Upload>
        </Form.Item>
        <Form.Item name={"price"} label={"Price"}>
          <InputNumber addonAfter={"VND"} />
        </Form.Item>
        <Form.Item name={"color"} label={"Color"}>
          <ListColorPicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalItem;
