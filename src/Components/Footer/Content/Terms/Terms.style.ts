import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{
},
spanTxt:{
  color:"#eee",
  size:'1.2rem',
},
list:{
  margin:'2rem 0',
  "& > li":{
    color:"#eee",
    margin:'.5rem 0',
    size:'.9rem',
  }
}
});