import React from 'react'
import { Checklist } from './Checklist/Checklist'
import {QA} from './QA/QA'
import {styles} from './Resources.style'

export const Resources = () => {
  const classes=styles();
  return (
    <div  className={classes.wrapper}>
      <Checklist />
      <QA />
    </div>
  )
}
