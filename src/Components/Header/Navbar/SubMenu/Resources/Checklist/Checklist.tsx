import React from 'react'
import { Link } from 'react-router-dom'
import {styles} from './Checklist.style'
export const Checklist = () => {
  const classes=styles();
  return (
    <div >
      <h3 className={classes.title}>Checklists</h3>
      <div className={classes.container}>
      <Link to="/" className={classes.link}>The Ultimate End of Lease Cleaning Checklist</Link>
      <p className="description">For those on a budget and looking to perform their own end of lease cleans.</p>
      </div>
      <div className={classes.container}>
      <Link className={classes.link} to="/">
        The Ultimate Moving House Checklist
      </Link>
      <p className="description">From years of industry experience, a guide to help customers make the big move.</p>
      </div>
      <div className={classes.container}>
      <Link className={classes.link} to="/">
        The Ultimate Moving Overseas Checklist</Link>
      <p className="description">A comprehensive moving plan for those venturing overseas.</p>
      </div>
      
    </div>
  )
}
