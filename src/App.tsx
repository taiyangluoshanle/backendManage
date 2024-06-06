import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

import AppRoutes from "./Router";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className=" h-screen">
      <Layout className="h-full">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            // items={[
            //   {
            //     key: "1",
            //     icon: <UserOutlined />,
            //     label: "nav 1",
            //   },
            //   {
            //     key: "2",
            //     icon: <VideoCameraOutlined />,
            //     label: "nav 2",
            //   },
            //   {
            //     key: "3",
            //     icon: <UploadOutlined />,
            //     label: "nav 3",
            //   },
            // ]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <a href="/products">products</a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
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
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <ProductList /> */}
            <AppRoutes />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
