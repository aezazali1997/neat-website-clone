import React,{FC} from 'react'
import {styles} from './Star.style'
import star from '../../../../assets/star.png'
type Props ={
  rating:number
}
export const Star:FC<Props> = ({rating}) => {
  const classes=styles();
  return (
    <div className={classes.wrapper}>
     <img className={classes.star} src={star} alt="" />
     <img className={classes.star} src={star} alt="" />
     <img className={classes.star} src={star} alt="" />
     <img className={classes.star} src={star} alt="" />
     <img className={classes.star} src={star} alt="" />
    </div>
  )
}
