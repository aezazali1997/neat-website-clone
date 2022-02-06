import React from 'react';
import {styles} from './BottomLine.style'
import {Link} from 'react-router-dom'
export const BottomLine = () => {
  const classes=styles();
  return <div className={classes.wrapper}>
  <div>
  <span className={classes.copyWrite}>©2022 THIS IS NEAT CLEANING PTY LTD</span>
  </div>
  <div>
  <ul className={classes.list}>
  <li>
  <Link to="/" >request a reclean</Link>
  </li>
  <li>
  <Link to="/" >tersn and conditios</Link>
  </li>
  <li>
  <Link to="/" >prvacy policy</Link>
  </li>
  </ul>
  </div>
  <div>
  <Link className={classes.abnLink} to="/" >ABN: 92 616 673 440</Link>
  </div>
  </div>;
};
