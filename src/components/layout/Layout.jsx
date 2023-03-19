import React from 'react';

import { Layout as AntLayout, Space } from 'antd';
const { Header, Footer, Sider, Content } = AntLayout;

import { useCharacters } from '../../hooks/rick-hook';
import { useMovie } from '../../hooks/movie-hook';

import styles from './Layout.css';

export const Layout = ({ children }) => {
  // const { data: charactersData } = useCharacters();
  // const { data: movieData } = useMovie('Harry Potter');

  // console.log('characters ', charactersData);
  // console.log('movieData ', movieData);

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <AntLayout>
        {/* <Header className={styles.headerStyle}>Header</Header>
      <Content className={styles.contentStyle}>Content</Content>
      <Footer className={styles.footerStyle}>Footer</Footer> */}
        {children}
      </AntLayout>
    </Space>
  );
};
