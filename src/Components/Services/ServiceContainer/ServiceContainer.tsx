import React,{FC} from 'react'
import {Link }from 'react-router-dom'
import {styles} from './ServiceContainer.style'
type Props = {
  image?:string;
  title?:string;
  description?:string;
}

export const ServiceContainer:FC<Props> = ({description,image,title}) => {
  const classes= styles();
  return (
      <Link to="/" className={classes.container}>
        <div className={classes.imgContainer}>
        <img src={image} alt="end of lease" className={classes.img} />
        </div>
        <div className={classes.txtContainer}>
        <div><span className={classes.title}>{title}</span></div>
        <div className={classes.descriptionContainer}>
        <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.linkContainer}>
        <span className={classes.link} >Learn more &nbsp;&nbsp; &rarr;</span>
        </div>
        </div>
      </Link>
  )
}
