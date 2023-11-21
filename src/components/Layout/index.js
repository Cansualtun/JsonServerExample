import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme ,Input} from "antd";
import Link from "next/link";
import Search from "@/pages/search";
const { Header, Sider, Content } = Layout;

const BaseLayout = ({ children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleSearch = (searchTerm) => {
    console.log("Aranan kitap:", searchTerm);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
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
        </Menu>
      </Sider>
      <Layout>
       
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
