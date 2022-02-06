import React,{FC,useRef,useEffect} from 'react'
import {Star} from './Star/Star'
import {styles} from './SingleReview.style'
type Props ={
  image:string;
  name:string;
  role:string;
  written:string;
  description:string;
  rating:number;
  translate?:number
}
export const SingleReview:FC<Props> =({description,image,name,rating,role,translate=0,written}) => {
useEffect(()=>{
  console.log("num",translate);
},[translate])


  const classes=styles()
  return (
    <div className={classes.wrapper}>
    <div>
      <div className={classes.imgContainer}>
      <img className={classes.img} src={image} alt='car'/>
      <p>{name}</p>
      <p><span>{role}</span><span>{written}</span> </p>
      </div>
    </div>
    <div className={classes.txtContainer}>
    <div>
    {description}
    </div>
    <div>
    <Star rating={rating} />
    </div>
    </div>
    </div>
  )
}
