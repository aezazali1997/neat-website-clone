import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{
  display:'flex',
  minWidth:'75%',
  margin:'0 12rem',
},
imgContainer:{
  display:"flex",
  flexDirection:'column',
},
img:{
  width:250,
  height:250,
  borderRadius:'100%'
},
txtContainer:{
  display:"flex",
  flexDirection:'column',
  justifyContent:'center',
}
});