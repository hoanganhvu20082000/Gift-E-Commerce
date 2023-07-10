import { Avatar, Divider, List, Steps, Tag } from "antd";
import CircleIcon from "@mui/icons-material/Circle";

const STATUS = {
  PENDING: 0,
  DELIVERING: 1,
  SUCCESS: 2,
};

export const renderColumnOrderUser = (data: any) => [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (val: "PENDING" | "DELIVERING" | "SUCCESS") => {
      console.log("val", val);
      return (
        <Steps
          direction="vertical"
          progressDot
          size="small"
          current={STATUS[val]}
          items={[
            {
              title: "Chờ duyệt đơn",
              description: "Shop đã nhận thông tin, bạn đợi chút nhé",
            },
            {
              title: "Đang giao hàng",
              description: "Đơn hàng đang được giao đến bạn",
            },
            {
              title: "Giao Hàng Thành Công",
              description: "Cảm ơn bạn đã ủng hộ shop ạ",
            },
          ]}
        />
      );
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
          <Divider>Tổng số: {sum} VNĐ </Divider>
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
          <Divider dashed>Số điện thoại: 0{val.phoneNumber}</Divider>
          <Divider dashed>Tên người nhận: {val.userName}</Divider>
          <Divider dashed />
        </>
      );
    },
  },
];
