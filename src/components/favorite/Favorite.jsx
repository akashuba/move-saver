import React from 'react';
import { useState, useEffect } from 'react';
import { Empty } from 'antd';
import { ListComponent } from '../listComponent';

export const Favorite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    console.log('favorite: ', Object.values(favorite));
    setData(Object.values(favorite));
  }, []);

  const handleDelete = (item) => () => {
    const dataFiltered = data.filter((el) => el.imdbID !== item.imdbID);
    setData(dataFiltered);
    window.localStorage.setItem('favorite', JSON.stringify(dataFiltered));
  };

  return (
    <>
      {data ? (
        <ListComponent
          data={data}
          onclick={(item) => handleDelete(item)}
          isDelite={true}
        />
      ) : (
        <Empty description={<span>Нет сохраненных фильмов</span>}></Empty>
      )}
    </>
  );
};
