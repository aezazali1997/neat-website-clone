import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
container:{
  padding:"10rem 5rem",
  overflow:'hidden',
  position:'relative',
},
reviewContainer:{
  display:'flex',
  width:'100%',
  justifyContent:'flex-start',
  transition:'all .3s ease-in-out',
  transform:'translateX(0px)',
  },
  left:{
    position:'absolute',
    top:'50%',
    left:10,
    fontSize:'2rem',
    background:'transparent',
    border:'none',
    cursor:'pointer',
    transform:'translateY(-50%)',
    zIndex:10,
  },
   right:{
   zIndex:10,
    cursor:'pointer',
    position:'absolute',
    top:'50%',
    right:10,
    marginLeft:'2rem',
    fontSize:'2rem',
    background:'transparent',
    border:'none',
    transform:'translateY(-50%)',
  }
});