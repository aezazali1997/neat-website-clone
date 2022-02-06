import React from 'react'
import {styles} from './Locations.style';
import sydney from '../../../../../assets/locations-sydney.jpg'
import { Link } from 'react-router-dom';
import melbrone from '../../../../../assets/locations-melbourne.jpg'
import {SingleContainer} from './SingleContainer/SingleContainer'
export const Locations = () => {
  const classes=styles();
  return (
    <div className={classes.wrapper}>
    <div className={classes.locationDetails}>
     <SingleContainer image={sydney} name="sydney" desc="From hidden terraces to apartment high-rises, we offer Sydney's best end of lease cleaning service" />
     <SingleContainer image={melbrone} name="melbrone" desc="Melbourne might be known for it’s coffee culture, but our claim to fame is a hassle-free end of lease clean." />
     <SingleContainer />
    </div>
    <div>
    <ul className={classes.links}>
    <Link to="/">
      <li>Inner West</li>
    </Link>
    <Link to="/">
      <li>Eastern Subburds</li>
    </Link>
    <Link to="/">
      <li>Northern Beaches</li>
    </Link>
    <Link to="/">
      <li>North Shore</li>
    </Link>
    </ul>
    </div>
    </div>
  )
}
