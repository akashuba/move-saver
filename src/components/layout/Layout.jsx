import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Layout as AntLayout, Space, Menu } from 'antd';
const { Header, Footer, Sider, Content } = AntLayout;
import { HomeTwoTone, HeartTwoTone } from '@ant-design/icons';

import { useCharacters } from '../../hooks/rick-hook';
import { useMovie } from '../../hooks/movie-hook';

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
  // const { data: charactersData } = useCharacters();
  // const { data: movieData } = useMovie('Harry Potter');

  // console.log('characters ', charactersData);
  // console.log('movieData ', movieData);

  return (
    // <Space
    //   direction="vertical"
    //   style={{
    //     width: '100%',
    //   }}
    //   size={[0, 48]}
    // >
    <AntLayout className={styles.container}>
      {' '}
      <Header className={styles.headerStyle}>
        <Space>
          <Menu mode="horizontal" items={items} />
        </Space>
      </Header>{' '}
      <Content className={styles.contentStyle}>
        <Outlet />
      </Content>
      <Footer className={styles.footerStyle}>Footer</Footer>
    </AntLayout>
    // </Space>
  );
};
