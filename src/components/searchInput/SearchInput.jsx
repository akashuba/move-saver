import React, { useState } from 'react';

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
    <Space direction="vertical">
      <Search
        placeholder="input search text"
        onSearch={handleSearch}
        style={{
          width: 200,
        }}
      />
    </Space>
  );
};
