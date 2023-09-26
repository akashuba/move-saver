import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Empty, List, Image } from 'antd';

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
        <List
          grid={{
            gutter: 16,
            column: 5,
          }}
          dataSource={Object.values(data)}
          renderItem={(item) => (
            <List.Item>
              <Card
                hoverable
                title={item.Title}
                actions={[<button onClick={handleDelete(item)}>❌</button>]}
              >
                <Image width={200} src={item.Poster} />
              </Card>
            </List.Item>
          )}
        />
      ) : (
        <Empty description={<span>Нет сохраненных фильмов</span>}></Empty>
      )}
    </>
  );
};
