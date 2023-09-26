import React, { useState } from 'react';
import { Empty, Pagination, Input, Space } from 'antd';

import { ListComponent } from '../listComponent';

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

    window.localStorage.setItem(
      'favorite',
      JSON.stringify(Object.values(favorite))
    );
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
              <ListComponent
                data={data.Search}
                onclick={(item) => handleClickFavorite(item)}
                isDelite={false}
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
