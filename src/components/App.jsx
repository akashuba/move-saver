import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { SearchInput } from './searchInput';
import { Layout } from './layout';
import { Favorite } from './favorite/Favorite';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SearchInput />} />
        <Route path="favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
};
