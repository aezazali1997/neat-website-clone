import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
container:{
  margin:"0 1rem",
  textDecoration:'none',
  display:'flex',
  flexDirection:'column',
  transition:'all .3s ease-in-out',
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  "&:hover":{
    transform:'translate(2px,-2px)'
  }
},
img:{
  width:'100%',
  minHeight:"370px",
  display:"block",
  borderTopLeftRadius:"10px",
  borderTopRightRadius:"10px",
flex:1
},
imgContainer:{

},
title:{
  color:'black',
  fontSize:"1.2rem",
  fontWeight:"normal",
  textTransform:'capitalize',
  textDecoration:'none',
},
description:{
  fontSize:'1.2rem',
  color:'gray',
},
descriptionContainer:{
margin:"1rem 0",

},
txtContainer:{
  background:'#fff',
  padding:'2rem',
  flex:1,
  position:'relative',
},
linkContainer:{
margin:'4rem 0',
  },
link:{
  position:'absolute',
  bottom:40,
  left:40,
  textDecoration:'none',
  color:'skyblue',
  fontSize:"1.2rem",
},
"@media screen and (max-width:992px)":{
  container:{
    flexDirection:'row',
    margin:"1rem 0",
  },
  img:{
    minHeight:'100%',
  },
"@media screen and (max-width:652px)":{
  container:{
    flexDirection:"column",
  }
}
}
});