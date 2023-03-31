import React, { useState } from 'react';
import { Card, Empty, List, Image } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useMovie } from '../../hooks/movie-hook';
import { getMovie } from '../../api/movie';

import styles from './SearchInput.css';

const { Search } = Input;

export const SearchInput = () => {
  // const { data: movieData } = useMovie('Harry Potter');
  const [data, setData] = useState();

  console.log('styles ', styles);

  const handleSearch = (value) => {
    getMovie(value)
      .then(function (response) {
        setData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  console.log(data);

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={handleSearch}
          style={{
            width: 200,
          }}
        />

        {data ? (
          <List
            grid={{
              gutter: 16,
              column: 4,
            }}
            dataSource={data.Search}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.Title}>
                  <Image width={200} src={item.Poster} />
                </Card>
              </List.Item>
            )}
          />
        ) : (
          <Empty />
        )}
      </Space>
    </>
  );
};
