import React from 'react';

import styles from './Header.css'

export const Header = () => {
  console.log('styles ', styles);
  return <div className={styles.wrapper}>Header</div>
}