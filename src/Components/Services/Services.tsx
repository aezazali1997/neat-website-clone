import React from 'react'
import {ServiceContainer} from './ServiceContainer/ServiceContainer'
import {styles} from './Services.style'
import { data } from './servicesData'

export const Services = () => {
  const classes= styles();
  return (
    <div className={classes.wrapper}>
      <div>
      <h1 className={classes.heading}>our services</h1>
      </div>
      <div>
      <h3 className={classes.subHeading}>Dependable,professional, and expereicned. Choose from any of our bond cleaning services and we'll handle the rest.</h3>
      </div>
      <div className={classes.services}>
     {
       data.map(({image,title,desc})=>(
         <ServiceContainer image={image} title={title} description={desc} />
  ))
     }
      </div>
    </div>
  )
}
