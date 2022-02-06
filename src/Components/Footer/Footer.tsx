import React from 'react';
import {styles} from './Footer.style'
import {BottomLine} from './BottomLine/BottomLine'
import {Content} from './Content/Content'
export const Footer = () => {
  const classes= styles();
  return <div className={classes.wrapper}>
  <Content />
  <BottomLine />
  </div>;
};
