import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Empty, List, Image } from 'antd';

export const Favorite = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('favorite'));
    setData(favorite);
    // console.log('favorite', favorite);
  }, []);
  // console.log('data', data);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(data));
  }, [data]);

  const handleDelete = (item) => () => {
    // console.log(item);
    const dataFiltered = { ...data };
    delete dataFiltered[item.imdbID];

    // console.log('dataFiltered', dataFiltered);

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
        <Empty />
      )}
    </>
  );
};
