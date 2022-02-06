import React,{FC} from 'react'
import {styles} from './SingleContainer.style'
import { Link } from 'react-router-dom';
type Props = {
  image?:string;
  name?:string;
  desc?:string
}
export const SingleContainer:FC<Props> = ({image,name,desc}) => {
  const classes= styles();
  return (
    <div className={classes.singleContainer}>
        { image ? <>
        <Link to="/">
        <div className="imgContainer">
        <img src={image} alt="sydney" className={classes.img} />
        </div>
        </Link>
        <Link to="/"><p className={classes.name}>{name}</p></Link>
        <p className={classes.description}>{desc}</p>
        </>
        :''
      }
      </div>
  )
}
