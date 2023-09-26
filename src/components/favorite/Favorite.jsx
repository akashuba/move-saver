import React from 'react';
import { useState, useEffect } from 'react';
import { Empty } from 'antd';
import { ListComponent } from '../listComponent/ListComponent';

export const Favorite = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    setData(favorite);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(data));
  }, [data]);

  const handleDelete = (item) => () => {
    const dataFiltered = { ...data };
    delete dataFiltered[item.imdbID];

    setData(dataFiltered);
  };

  return (
    <>
      {data ? (
        <ListComponent
          data={Object.values(data)}
          onclick={(item) => handleDelete(item)}
          isDelite={true}
        />
      ) : (
        <Empty description={<span>Нет сохраненных фильмов</span>}></Empty>
      )}
    </>
  );
};
