import React, { useState } from 'react';
import { Card, Empty, List, Pagination, Button, Input, Space } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

import { getMovie } from '../../api/movie';

import styles from './SearchInput.css';
import { Link } from 'react-router-dom';

const { Search } = Input;

export const SearchInput = () => {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [ghost, setghost] = useState(true);

  const handleGetMovie = (value, page) => {
    getMovie(value, page)
      .then(function (response) {
        setData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handSearch = (newValue) => {
    setValue(newValue);
    handleGetMovie(newValue, page);
  };

  const handPagination = (newPage) => {
    setPage(newPage);
    handleGetMovie(value, newPage);
  };

  const handleClickFavorite = (item) => () => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));

    favorite[item?.imdbID] = item;
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  };

  let totalPages = 0;
  if (data) {
    totalPages = Math.ceil(+data.totalResults / 10);
  }
  return (
    <>
      <div className={styles.container}>
        <Space
          size="large"
          align="center"
          direction="vertical"
          style={{ display: 'flex' }}
        >
          <Search
            placeholder="название фильма"
            onSearch={(value) => handSearch(value)}
            style={{
              width: 400,
            }}
            size="large"
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
                  <List.Item key={item.imdbID}>
                    <Link to={`/${item.imdbID}`}>
                      <Card
                        style={{
                          background: `url(${item.Poster}) no-repeat center`,
                          height: '300px',
                          width: 200,
                          backgroundSize: 'cover',
                          position: 'relative',
                        }}
                        hoverable
                        bordered={false}
                      ></Card>
                    </Link>
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<HeartOutlined />}
                      size="small"
                      style={{ position: 'absolute', left: 14, bottom: 7 }}
                      onClick={handleClickFavorite(item)}
                      ghost={ghost}
                      danger
                    />
                  </List.Item>
                )}
              />
              <Pagination
                defaultCurrent={page}
                total={totalPages}
                showSizeChanger={false}
                onChange={(page) => handPagination(page)}
              />
            </>
          ) : (
            <Empty description={<span>Начните поиск фильмов</span>}></Empty>
          )}
        </Space>
      </div>
    </>
  );
};
