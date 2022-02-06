import React,{useRef} from "react";
import { styles } from "./Navbar.style";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { SubMenu } from "./SubMenu/SubMenu";
import classNames from "classnames";
import {Locations} from './SubMenu/Locations/Locations';
import {Services} from './SubMenu/Services/Services';
import {Resources} from './SubMenu/Resources/Resources'
export const Navbar = () => {
  const hamburger=useRef<HTMLDivElement>(null);
  const classes = styles();
  const showResponsiveMenu = () =>{
    if(hamburger){
      if(hamburger.current){
          if(hamburger.current.style.visibility==='visible'){
            hamburger.current.style.visibility='hidden';
            hamburger.current.style.opacity='0';
          }
          else{
            hamburger.current.style.visibility='visible';
            hamburger.current.style.opacity='1';
          }
      }
    }
  }
  return (
    <div className={classes.container}>
      <div>
        <Link className={classes.neat} to="/" >
          Neat
        </Link>
      </div>
      <ul className={classes.menuBar}>
        <li className="location">
          <Link to="locations">locations</Link>
          <div className={classNames(classes.subMenu,classes.subMenuLocation)}>
          <SubMenu items={<Locations />}  />
          </div>
        </li>
        <li className="services">
          <Link to="services" >services</Link>
           <div className={classNames(classes.subMenu,classes.subMenuServices)}>
          <SubMenu items={<Services />}  />
          </div>
        </li>
        <li className="resources">
          <Link to="resources" >resources</Link>
           <div className={classNames(classes.subMenu,classes.subMenuResources)}>
          <SubMenu items={<Resources />}  />
          </div>
        </li>
        <li>
          <Link to="blog">blog</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <div className={classes.quoteBtnContainer}>
        <Link
          to="end-of-lease-cleaning/sydney/#get-a-quote"
          className={classes.quoteBtn}
        >
          get a quote
        </Link>
      </div>
      <div className={classes.biMenuWrapper}>
        <button className={classes.menuBtn} onClick={showResponsiveMenu}>
          <BiMenu className={classes.biMenu} />
        </button>
      </div>
      <div ref={hamburger} className={classes.responsiveMenu}>
      <ul className={classes.list}>
      <li className={classes.listItem}>
      <Link to='/'>Locations</Link>
      </li>
      <li className={classes.listItem}>
      <Link to='/'>Services</Link>
      </li>
      <li className={classes.listItem}>
      <Link to='/'>Resources</Link>
      </li>
      <li className={classes.listItem}>
      <Link to='/'>Blog</Link>
      </li>
      <li className={classes.listItem}>
      <Link to='/'>Reviews</Link>
      </li>
      </ul>
      </div>
      
    </div>
  );
};
