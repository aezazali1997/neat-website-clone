import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1em 3em",
    position: "static",
    zIndex: 99,
  },
  quoteBtn: {
    border: "1px solid #fff",
    padding: "1em 1.5em",
    borderRadius: 250,
    textDecoration: "none",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1em",
  },
 subMenu:{
    transition: "all .2s ease-in",
    position:'absolute',
    top:110,
    visibility:"hidden",
    opacity:0,
  },
  subMenuLocation: {
    left:"25%",
  },
  subMenuServices:{
    left:"35%",
  },
  subMenuResources:{
    left:"40%",
  },
  menuBar: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    listStyleType: "none",
    "& li": {
      "& a": {
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: ".8em",
        color: "#fff",
        display: "block",
        position: "relative",
        fontWeight: "bold",
        "&::after": {
          content: '""',
          position: "relative",
          right: -10,
          top: "50%",
          transform: "translateY(-10%)",
          border: "4px solid transparent",
          borderTop: "4px solid #fff",
          marginLeft: 2,
          marginBottom: 3,
          display: "inline-block",
          verticalAlign: "bottom",
          transition: "transform .3s ease-in",
        },
        "&:hover": {
          "&::after": {
            transform: "rotate(180deg) translateY(7px)",
          },
        },
      },
      "&.location:hover $subMenuLocation":{
        visibility:'visible',
        opacity:1,
      },
      "&.services:hover $subMenuServices":{
        visibility:'visible',
        opacity:1,
      },
      "&.resources:hover  $subMenuResources":{
        visibility:'visible',
        opacity:1,
      }
    },
  },
  neat: {
    fontSize: "3em",
    fontStyle: "italic",
    fontWeight: 900,
    textDecoration: "none",
    color: "#fff",

  },
  menuBtn: {
    background: "transparent",
    color:"#eee",
    border: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  responsiveMenu:{
    display:'none',
  },
  list:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    listStyleType:"none",
    marginTop:'10rem',
    marginLeft:'2rem',
  },
  listItem:{
    margin:'1rem 0',
    "& a":{
      color:"#eee",
      fontSize:'1.2rem',
      textDecoration:'none',
      zIndex:199,
      "&:hover":{
        textDecoration:"underline",

      }
    }
  },
  biMenuWrapper: {},
  biMenu: {
    fontSize: "3em",
  },
  quoteBtnContainer: {},
  "@media screen and (max-width:992px)": {
    quoteBtnContainer: {
      display: "none",
    },
    menuBar: {
      display: "none",
    },
    neat:{
    zIndex:99,
    position:'relative',
    },
    responsiveMenu:{
      display:'block',
    visibility:'hidden',
    opacity:'0',
    position:'absolute',
    transition:'all .3s ease-in',
    top:0,
    bottom:0,
    right:0,
    left:0,
    background:'rgba(0,0,0,.9)'
    },
    menuBtn:{
      position:'relative',
      zIndex:199,
    }
  },
  "@media screen and (min-width:992px)": {
    biMenuWrapper: {
      display: "none",
    },
  },
});
