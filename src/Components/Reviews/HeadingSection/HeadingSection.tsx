import React from 'react'
import {styles} from './HeadingSection.style'
export const HeadingSection = () => {
  const classes =styles();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>Our Reviews</h1>
      <p className={classes.desc}>We believe our work speaks for itself, but our customers vouch for us too.
Here’s just a few of the reviews that make up our <a href='#' >4.8 star rating</a>  on Google </p>
    </div>
  )
}
