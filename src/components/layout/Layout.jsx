import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Layout as AntLayout, Space, Menu } from 'antd';
const { Header, Footer, Sider, Content } = AntLayout;
import { HomeTwoTone, HeartTwoTone } from '@ant-design/icons';

import styles from './Layout.css';

const items = [
  {
    label: <Link to="/">Main</Link>,
    key: 'mail',
    icon: <HomeTwoTone />,
  },
  {
    label: <Link to="/favorite">Favorite</Link>,
    key: 'favorite',
    icon: <HeartTwoTone />,
  },
];

export const Layout = ({ children }) => {
  return (
    <AntLayout className={styles.container}>
      <Header className={styles.headerStyle}>
        <Menu mode="horizontal" theme="dark" items={items} />
      </Header>
      <Content className={styles.contentStyle}>
        <Outlet />
      </Content>
      {/* <Footer className={styles.footerStyle}>
        <a href="#">movie finder</a>
      </Footer> */}
    </AntLayout>
  );
};
