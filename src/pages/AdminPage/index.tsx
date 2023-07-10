import React, { useEffect, useState } from "react";
import {
  AreaChartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import RenderTable from "./RenderTable";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Products", "products", <AreaChartOutlined />),
  getItem("Users", "users", <UserOutlined />),
  getItem(
    "Orders",
    "orders",
    <ShoppingCartOutlined /> /* , [
    getItem("Pending", "order/pending"),
    getItem("Failure", "order/fail"),
    getItem("Success", "order/success"),
  ] */
  ),
  // getItem("Files", "9", <FileOutlined />),
];

const AdminPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedItem, setSelectedItem] = useState("products");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["products"]}
          mode="inline"
          items={items}
          onClick={({ key }) => {
            setSelectedItem(key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{selectedItem.toUpperCase()}</Breadcrumb.Item>
            <Breadcrumb.Item>{`All ${selectedItem}`}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <RenderTable selectedItem={selectedItem} />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default AdminPage;
