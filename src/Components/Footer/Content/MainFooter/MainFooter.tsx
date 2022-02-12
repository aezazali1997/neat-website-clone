import React from "react";
import {styles} from './MainFooter.style'
import {Link} from 'react-router-dom'
import {BsFacebook,BsTwitter,BsGoogle,BsInstagram} from 'react-icons/bs'
export const MainFooter = () => {
  const classes=styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoDesc}>
        <div> <Link className={classes.neat} to="/" >
          Neat
        </Link></div>
        <div className={classes.desc}>
          <p>
            This is Neat is a bond cleaning service keeping tenants, real estate
            agents and property managers happy all across Sydney and Melbourne.
          </p>
        </div>
        <div className={classes.icons}>
        <span><BsFacebook color="#eee"/></span>
        <span><BsTwitter color="#eee"/></span>
        <span><BsGoogle color="#eee"/></span>
        <span><BsInstagram color="#eee"/></span>
        </div>
      </div>
      <div className={classes.links}>
        <h3 className={classes.linksHeading}>Services</h3>
        <ul className={classes.servicesLink}>
          <li>
            <a href="">End of lease</a>
          </li>
          <li>
            <a href="">Vecate Cleaning</a>
          </li>
          <li>
            <a href="">Moving Cleaning</a>
          </li>
        </ul>
      </div>
      <div className={classes.links}>
        <h3 className={classes.linksHeading}>Location</h3>
        <ul>
          <li>
            <a href="">Sydney</a>
          </li>
          <li>
            <a href="">Melbourne</a>
          </li>
          <li>
            <a href="">Inner West</a>
          </li>
          <li>
            <a href="">Eastern Suburbs</a>
          </li>
          <li>
            <a href="">Northern Beaches</a>
          </li>
          <li>
            <a href="">North Shore</a>
          </li>
          <li>
            <a href="">Surry Hills</a>
          </li>
          <li>
            <a href="">Bondi</a>
          </li>
          <li>
            <a href="">Parramatta</a>
          </li>
        </ul>
      </div>
      <div className={classes.links}>
        <h3 className={classes.linksHeading}>Contact</h3>
        <p className={classes.contactDetails}>
          This is Neat Cleaning 39 Douglas Street Redfern, NSW 2016 Australia
          0488 845 135
        </p>
        <span className={classes.linkToMail}><a href="">hello@thisisneat.com.au</a></span>
      </div>
    </div>
  );
};
