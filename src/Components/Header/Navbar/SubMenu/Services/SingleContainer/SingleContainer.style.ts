import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
singleContainer:{
  display:'flex',
  flexDirection:'column',
  padding:'1rem',
  width:'250px',
  "& a":{
    textDecoration:'none',
  }
},
imgContainer:{
  width:'100%',
  height:'auto',
},
img:{
  borderRadius:'5px',
  width:'100%',
  display:'block'
},
name:{
  margin:'1rem 0',
  color:'skyblue',
  textTransform:'uppercase',
  fontFamily:'bold'
},
description:{
  fontSize:'1rem',
  color:'rgba(0,0,0,.7)'
}

});