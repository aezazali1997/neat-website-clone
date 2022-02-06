import React from 'react'
import {ServiceContainer} from './ServiceContainer/ServiceContainer'
import {styles} from './Services.style'
import endLease from '../../assets/end-of-lease-cleaning-service.jpg'
import vecateCleaning from '../../assets/vacate-cleaning-service.jpg';
import movingIn from '../../assets/move-in-move-out-cleaning-service.jpg';

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
      <ServiceContainer image={endLease} title='end of lease cleaning' description="With our famous 72-hour bond back guarantee*, our cleaners always ensure tenants recover their full rental deposits." />
      <ServiceContainer image={vecateCleaning} title='vecate cleaning' description="Our 5-star rated cleaners specialise in helping renters pass their final vacate inspections." />
      <ServiceContainer image={movingIn}  title='moving cleaning' description="Our cleaning teams will make sure your property is ready for sale, a rental inspection, or for your family to move into."/>
      </div>
    </div>
  )
}
