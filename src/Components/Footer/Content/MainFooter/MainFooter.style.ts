import {createUseStyles} from 'react-jss';
export const styles=createUseStyles({
wrapper:{
  display:'flex',
  justifyContent:'space-between',
},

logoDesc:{
  display:'flex',
  flexDirection:'column',
},
  neat: {
    fontSize: "3em",
    fontStyle: "italic",
    fontWeight: 900,
    textDecoration: "none",
    color: "#fff",

  },
  desc:{
    margin:'2rem 0 1rem 0',
    "& p":{
      color:"#eee",
    }
  },
  icons:{
    "& span":{
      margin:'0 1rem',
    }
  },
  linksHeading:{
    color:"#eee",
    fontFamily:'Arial',
    fontWeight:'bold',
    marginBottom:".5rem",
    borderBottom:'1px solid gray',
    paddingBottom:"1rem",
  },
  servicesLink:{
    
  },
  links:{
    margin:'0 2rem',
    "& ul":{
      listStyleType:'none',
      marginTop:"1rem",
      "& li":{
        margin:'.5rem 0',
      },
      "& li a":{
        color:"#eee",
        textDecoration:'none',
    
      }
    }

  },

  
  linkToMail:{
    display:'inline-block',
    margin:'1rem 0',
    "& a":{
      color:'#eee',
      textDecoration:'none',

    }
  },
  contactDetails:{
    color:'#eee',
    size:".9rem",
    margin:'1rem 0',
  },
  "@media screen and (max-width:760px)":{
    wrapper:{
      flexDirection:'column',
      alignItems:'center',
      textAlign:'center',

    },
    links:{
  margin:'2rem 0',
},
contactDetails:{
  margin:0,
  width:'100% !important',
}
},
});