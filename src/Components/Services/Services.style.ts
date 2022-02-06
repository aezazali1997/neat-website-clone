import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
heading:{
  fontSize:'2.8rem',

  textAlign:'center',
  textTransform:'capitalize',
  fontFamily:'Arial',
  fontWeight:"normal",
},
subHeading:{
    fontSize:'1.4rem',
  marginTop:"2rem",
  margin:'auto',
  textAlign:"center",
    fontFamily:'Arial',
  fontWeight:"normal",
  lineHeight:"2rem",
  width:"50%",
  "&:first-letter":{
    textTransform:"capitalize",
  }
},
services:{
  display:'flex',
  justifyContent:'space-between',
  padding:"2rem 5rem",
},
wrapper:{
  background:"#fee",
  padding:"8rem 0",
},
"@media screen and (max-width:992px)":{
  services:{
    flexDirection:"column",
  }
}
});