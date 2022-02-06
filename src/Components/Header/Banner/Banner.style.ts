import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  banner: {
    height: "940px",
    background: "#209bfa",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  txt: {
    marginTop: "10%",
    "& h1": {
      fontSize: "3.5rem",
      color: "#fff",
    },
    "& p": {
      fontSize: "1.2rem",
      color: "#fff",
      marginTop: "1rem",
    },
  },
  bannerImg: {
    marginLeft: "5rem",
    width: "45%",
    marginBottom: "1rem",
  },
  "@media screen and (max-width:992px)": {
    content: {
      flexDirection: "column",
    },
    bannerImg: {
      width: "100%",
      marginLeft: "0",
      display: "block",
    },
    txt: {
      margin: 0,
      "& h1": {
        marginTop: "2rem",
        fontSize: "2rem",
      },
    },
  },
});
