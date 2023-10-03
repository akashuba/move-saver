import React from 'react';
import { Link } from 'react-router-dom';
import { Card, List, Button } from 'antd';
import { HeartOutlined, CloseOutlined } from '@ant-design/icons';

export const ListComponent = ({ data, onclick, isDelite }) => {
  return (
    <List
      grid={{
        gutter: 16,
        column: 5,
      }}
      style={{ margin: '0 150px' }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item key={item.imdbID}>
          <Link to={`/${item.imdbID}`}>
            <Card
              style={{
                background: `url(${item.Poster}) no-repeat center`,
                height: '300px',
                width: 200,
                backgroundSize: 'cover',
                position: 'relative',
                margin: '0 auto',
              }}
              hoverable
              bordered={false}
            ></Card>
          </Link>
          <Button
            type="primary"
            shape="circle"
            icon={isDelite ? <CloseOutlined /> : <HeartOutlined />}
            size="small"
            style={{ position: 'absolute', left: 43, bottom: 7 }}
            onClick={onclick(item)}
            ghost={false}
            danger
          />
        </List.Item>
      )}
    />
  );
};
