import { Form, Input, Modal, Switch } from "antd";

import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

const ModalOrders = (props: any) => {
  const { isModalOpen, handleOk, handleCancel, detail } = props;
  console.log("detail", detail);

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };
  const initialValue = {
    email: "",
    user_name: "",
    createdAt: Date.now(),
    admin: false,
  };

  useEffect(() => {
    form.setFieldValue("email", detail?.email);
    form.setFieldValue("user_name", detail?.user_name);
    form.setFieldValue("createdAt", detail?.createdAt);
    form.setFieldValue("admin", detail?.admin);
  }, [detail, form]);
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
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
      >
        <Form.Item name={"email"} label={"Email"}>
          <Input />
        </Form.Item>
        <Form.Item name={"user_name"} label={"User name"}>
          <TextArea />
        </Form.Item>
        <Form.Item name={"admin"} label={"Admin"} valuePropName="checked">
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default ModalOrders;
