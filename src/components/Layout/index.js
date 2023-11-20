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
const { Header, Sider, Content } = Layout;

const BaseLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const newColorBgContainer = '#73BA9B'
  
  

  const handleSearch = async (query) => {
    try {
      const response = await fetch("http://localhost:3001/books");
      if (!response.ok) {
        throw new Error("Veriler alınırken hata oluştu.");
      }
  
      const data = await response.json();
      const filteredData = data.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredData);
    } catch (error) {
      console.error("Veriler alınırken hata oluştu.", error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
          <Menu.Item key="1" >
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
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
 }}
            />
          </div>
          <div style={{ marginTop: '30px' }}>
            <Input.Search
              placeholder="Search Books"
              onSearch={(value) => handleSearch(value)}
              style={{ width: 200 }}
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {React.cloneElement(children, { searchResults })}
        </Content>
      </Layout>
    </Layout>
  );
};
export default BaseLayout;
