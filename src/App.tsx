// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import Home from './pages/Home';
import About from './pages/Product';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '3',
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" mode="inline" items={menuItems}>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '16px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
