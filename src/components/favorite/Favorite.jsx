import React from 'react';

export const Favorite = () => {
  const favorite = localStorage.getItem('favorite');
  console.log(JSON.parse(favorite));
  return <h1>Favorite</h1>;
};
