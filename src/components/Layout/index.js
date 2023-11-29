import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BookOutlined,
  HomeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import Link from "next/link";
import styles from "./BaseLayout.module.css";

const { Header, Sider, Content } = Layout;

const BaseLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={styles.sider}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            {!collapsed && (
              <Link href="/">
                <p>Home</p>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item key="2" icon={<BookOutlined />}>
            {!collapsed && (
              <Link href="/books/add-book">
                <p>Add Book</p>
              </Link>
            )}
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />}>
            {!collapsed && (
              <Link href="/favorites">
                <p>Favorites</p>
              </Link>
            )}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.headerContent}>
            <Button
              type="text"
              color="white"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                color: "white",
              }}
            />
            <div className={styles.logoContainer}>
              <BookOutlined style={{ color: "white", fontSize: "20px" }} />
              {!collapsed && (
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Book App
                </p>
              )}
            </div>
          </div>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
