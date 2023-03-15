import React from 'react';

import { Layout as AntLayout, Space } from 'antd';
const { Header, Footer, Sider, Content } = AntLayout;

import { useMovies } from "../../hooks/movies-hook"

import styles from './Layout.css'

export const Layout = () => {

  const {data} = useMovies();

  console.log('movies ', data);

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
     <AntLayout>
      <Header className={styles.headerStyle}>Header</Header>
      <Content className={styles.contentStyle}>Content</Content>
      <Footer className={styles.footerStyle}>Footer</Footer>
    </AntLayout>
  </Space>
  )
}