import React,{useRef, useState} from 'react'
import {HeadingSection} from './HeadingSection/HeadingSection'
import {styles} from './Reviews.style'
import { SingleReview } from './SingleReview/SingleReview';



export const Reviews = () => {
  let currentReview=0;
  const ref= useRef<HTMLDivElement>(null);
  const classes = styles();
  const rightReview =() =>{
    currentReview++;
    console.log(currentReview);
    if(!ref.current){
      return
    }
    if(currentReview>4){
      currentReview=4;
    }
    ref.current.style.transform=`translateX(${-100*currentReview}%)`;


  }
  const leftReview = ()=>{
    currentReview--;
    console.log(currentReview);
    
    if(!ref.current){
      return
    }
        if(currentReview<0){
      currentReview=0;
    }
    ref.current.style.transform=`translateX(${-100*currentReview}%)`;


      }
  return (
    <div className={classes.container}>
      <HeadingSection/>
      <button onClick={()=>leftReview()} className={classes.left}>&larr;</button>
      <button onClick={()=>rightReview()} className={classes.right}>&rarr;</button>
      <div ref={ref}  className={classes.reviewContainer}>
      {
        [...Array(5)].map((ele:any,index:number)=>{
          return <SingleReview key={index} image='https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-4.svg' name='Hayley M.' role='RANDWICK ' written='2 YEARS AGO' description='Wonderful service, easy online booking, clear and transparent pricing from the start. They sent text updates with time of arrival and finishing, about an hour after finishing I got sent a detailed email with before and after pictures. My real estate could not fault the cleaning and I received my full bond refund 48hrs after the final inspection. Very happy with the service, could not fault!' rating={5} />
        })
      }
      
      </div>
    </div>
  )
}
