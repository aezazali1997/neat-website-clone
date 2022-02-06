import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
title:{
  fontSize:'1.1rem',
  margin:'1rem 0',
},
container:{
  margin:"1.5rem 0 !important",
  
},
link:{
color:'skyblue !important',
fontSize:'1rem!important',
"&:hover":{
textDecoration:'underline !important',
}
}
});