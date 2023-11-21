import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import Link from "next/link";
const { Header, Sider, Content } = Layout;

const BaseLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const newColorBgContainer = "#73BA9B";

  return (
    <Layout
      style={{ minHeight: "100vh", backgroundColor: newColorBgContainer }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link href="/">
              <p>Home</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/books/add-book">
              <p>Add Book</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/favorites">
              <p>Favorites</p>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              type="text"
              color="white"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
