import React, { useState, useEffect } from 'react';
import { Card, Empty, List, Image, Pagination } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useMovie } from '../../hooks/movie-hook';
import { getMovie } from '../../api/movie';

import styles from './SearchInput.css';

const { Search } = Input;

export const SearchInput = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');

const handleGetMovie = (value, page) => {
  getMovie(value, page)
  .then(function (response) {
    setData(response?.data);
  })
  .catch(function (error) {
    console.error(error);
  });
}

const handSearch = (newValue) => {
  setValue(newValue)
  handleGetMovie(newValue, page)
}

const handPagination = (newPage) => {
  setPage(newPage)
  handleGetMovie(value, newPage)
}

  // const handleSearch = (value) => {
  //   console.log('value: ', value);
  //   console.log('page: ', page);
  //   getMovie(value, page)
  //     .then(function (response) {
  //       setData(response?.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  console.log('data: ', data);

  let totalPages = 0;
  if (data) {
    totalPages = Math.ceil(+data.totalResults / 10);
    // console.log('pages: ', totalPages);
  }
  return (
    <>
      <Space direction="vertical" align="center">
        <Search
          placeholder="input search text"
          onSearch={(value) => handSearch(value)}
          style={{
            width: 200,
          }}
        />

        {data ? (
          <>
            <List
              grid={{
                gutter: 16,
                column: 5,
              }}
              dataSource={data.Search}
              renderItem={(item) => (
                <List.Item>
                  <Card hoverable title={item.Title}>
                    <Image width={200} src={item.Poster} />
                  </Card>
                </List.Item>
              )}
            />
            <Pagination
              defaultCurrent={page}
              total={totalPages}
              onChange={(page) => handPagination(page)}
            />
          </>
        ) : (
          <Empty />
        )}
      </Space>
    </>
  );
};
