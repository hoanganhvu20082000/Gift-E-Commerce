import {
  Image,
  Switch,
  Space,
  Input,
  Row,
  Col,
  List,
  Avatar,
  Divider,
  Tag,
} from "antd";
import CircleIcon from "@mui/icons-material/Circle";

import TextArea from "antd/es/input/TextArea";

export const renderColumnUsers = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    //   render: <div></div>,
  },
  {
    title: "User name",
    dataIndex: "user_name",
    key: "user_name",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (val: any) => {
      return <Switch checked={val} disabled />;
    },
  },
  {
    title: "Admin",
    dataIndex: "admin",
    key: "admin",
    render: (val: boolean) => {
      return <Switch checked={val} />;
    },
  },
];

export const renderColumnProduct = [
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
    render: (val: any) => {
      return <Switch checked={val} disabled />;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Classify",
    dataIndex: "classify",
    key: "classify",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (val: any) => {
      return <p>{val} VNĐ </p>;
    },
  },
  {
    title: "Image",
    dataIndex: "image_url",
    key: "image_url",
    width: 500,
    render: (val: any) => {
      // return val.map((v: any) => (
      //   <Image src={v} style={{ width: "10%", height: "10%" }} />
      // ));
      return (
        <Space size="small" style={{ display: "flex" }}>
          {val.map((v: any) => (
            <Image src={v.url} style={{ width: "100px", height: "100px" }} />
          ))}
        </Space>
      );
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (val: any) => <Input value={val} bordered={false} />, //<Text value={val} bordered={false} autoSize />,
    ellipsis: true,
    width: 200,
  },
  {
    title: "User Group",
    dataIndex: "user_group",
    key: "user_group",
    render: (val: any) => {
      return val.map((v: any) => <p>{v}</p>);
    },
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (val: any) => {
      return <p>{`${new Date(val)}`}</p>;
    },
  },
];

export const renderColumnOrder = (data: any) => [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "User",
    dataIndex: "user_id",
    key: "user_id",
    render: (val: any) => {
      return <p>{data.filter((i: any) => i.id === val)[0].email}</p>;
    },
  },
  {
    title: "Order Detail",
    dataIndex: "orderDetail",
    key: "orderDetail",
    render: (val: any) => {
      const sum = val.reduce(
        (
          num: number,
          obj: {
            quantity: number;
            price: number;
          }
        ) => num + obj.quantity * obj.price,
        0
      );
      return (
        <>
          <Divider>Tổng số: {sum} VNĐ </Divider>
          <List
            itemLayout="horizontal"
            dataSource={val}
            renderItem={(item: any, index) => {
              return (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar size={"large"} src={item.image_url} />}
                    title={item.product_name}
                    key={index}
                    description={
                      <>
                        <Divider orientation="left">
                          Số Lượng: {item.quantity}
                        </Divider>
                        <Divider orientation="left">
                          {" "}
                          Màu sắc:{" "}
                          <CircleIcon
                            className={"circle-style"}
                            sx={{ color: `${item.color}`, fontSize: "26px" }}
                          />
                        </Divider>
                        <Divider orientation="left">
                          {" "}
                          Tổng số tiền: {item.quantity * item.price} VNĐ
                        </Divider>
                      </>
                    }
                  />
                </List.Item>
              );
            }}
          />
        </>
      );
    },
  },
  {
    title: "Thông tin người nhận",
    dataIndex: "infomation",
    key: "infomation",
    render: (val: any) => {
      return (
        <>
          <Divider dashed />
          <Divider dashed>Địa chỉ: {val.address}</Divider>
          <Divider dashed>Số điện thoại 0{val.phoneNumber}</Divider>
          <Divider dashed>Tên người nhận {val.userName}</Divider>
          <Divider dashed />
        </>
      );
    },
  },
];
