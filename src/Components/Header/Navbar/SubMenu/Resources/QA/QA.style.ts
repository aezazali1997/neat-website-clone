import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{},
QA:{
  listStyleType:'none',
},
listItem:{
  margin:'1.8rem 0',
},
Link:{
  color:'skyblue !important',
  "&:hover":{
    textDecoration:'underline',
  }
}
});