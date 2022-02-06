import React from 'react'
import {styles} from './Services.style';
import image1 from '../../../../../assets/move-in-move-out-cleaning-service.jpg'
import image2 from '../../../../../assets/vacate-cleaning-service.jpg'
import image3 from '../../../../../assets/end-of-lease-cleaning-service.jpg'
import {SingleContainer} from './SingleContainer/SingleContainer'
export const Services = () => {
  const classes=styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.locationDetails}>
      <SingleContainer image={image1} name="End of lease cleaning" desc="With our famous bond back guarantee*, our cleaners always ensure tenants recover their full rental deposits." />
      <SingleContainer image={image2} name="vecate cleaning" desc="Our 5-star rated cleaners specialise in helping renters pass their final vacate inspections." />
      <SingleContainer image={image3} name="Moving cleaning" desc="Our cleaning teams will make sure your property is ready for sale, a rental inspection, or for your family to move into." />
      </div>
    </div>
  )
}
