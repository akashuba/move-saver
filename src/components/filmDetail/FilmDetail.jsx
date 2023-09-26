import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../../api/movie';
import { Empty, List } from 'antd';

export const FilmDetail = () => {
  const { id } = useParams();
  const [filmData, setFilmData] = useState();

  useEffect(() => {
    getMovieDetail(id)
      .then((response) => setFilmData(response?.data))
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      {filmData ? (
        <>
          <img src={filmData.Poster} />
          <p>{filmData.Title}</p>
          <p>{filmData.Year}</p>
          <p>{filmData.Runtime}</p>
          <p>{filmData.Plot}</p>
        </>
      ) : (
        <Empty description={<span>Нет сохраненных фильмов</span>}></Empty>
      )}
    </>
  );
};
