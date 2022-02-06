import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{
  display:'flex',
  padding:'1rem 10rem',
  background:"rgb(43,43,43)",
  justifyContent:'space-between',
  fontSize:'0.8rem',
  opacity:0.9,
},
copyWrite:{
  color:"#eee",
  fontWeight:'bold',
},
list:{
  display:'flex',
  listStyleType:'none',
  "& li":{
    margin:'0 1rem',
    "& a":{
      color:'#eee',
      textDecoration:'none',
      textTransform:'capitalize',
    }
  }
},
abnLink:{
  textDecoration:'none',
  color:"#eee",
  "&:hover":{
    textDecoration:'underline',
  }

}
});