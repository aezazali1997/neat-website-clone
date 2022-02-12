import React from 'react';
import {Terms} from './Terms/Terms';
import {MainFooter} from './MainFooter/MainFooter'
import {styles} from './Content.style'
export const Content = () => {
  const classes=styles();
  return <div className={classes.wrapper}>
  < MainFooter/>
  <Terms />
  </div>;
};
