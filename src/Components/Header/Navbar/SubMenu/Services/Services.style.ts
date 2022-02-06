import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{
  display:'flex',
  flexDirection:'column',
},
locationDetails:{
  display:'flex'
},

links:{
  listStyleType:'none',
  marginTop:"1rem",
  display:'flex',
  "& li":{
    display:"inline-block",
    margin:'0 1rem',
    textDecoration:'underline',
    fontSize:'1rem',
    color:'skyblue',
    textTransform:'capitalize'
  }
},
});