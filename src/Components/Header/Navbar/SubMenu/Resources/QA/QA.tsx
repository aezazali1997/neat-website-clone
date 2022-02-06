import React from 'react'
import { Link } from 'react-router-dom'
import {styles} from './QA.style'
export const QA = () => {
  const classes = styles();
  return (
    <div>
    <h2>Q&A</h2>
      <ul className={classes.QA}>
      <li className={classes.listItem}>
        <Link className={classes.Link} to="/">What is Bond Cleaning?</Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.Link} to="/">How Much Is a Bond Clean?</Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.Link} to="/">What's the Price of an End of Lease Clean?</Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.Link} to="/">How to Break a Rental Lease Early</Link>
      </li>
      <li className={classes.listItem}>
        <Link className={classes.Link} to="/">How to Move with Pets</Link>
      </li>
      </ul>
    </div>
  )
}
