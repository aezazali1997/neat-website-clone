import { createUseStyles } from "react-jss";
export const styles = createUseStyles({
  voucherWrapper: {
    background: "rgba(0,0,0,.1)",
    height: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBlock: "1em",
    position: "relative",
  },
  voucherTxt: {
    textTransform: "capitalize",
    color: "#eee",
    fontSize: 12,
    margin: "1em 0 1em 2em",
  },
  code: {
    fontSize: 14,
  },
  "@media screen and (max-width:554px)": {
    voucherTxt: {
      width: "20em",
      textAlign: "center",
    },
  },
  "@media screen and (max-width:996px)": {
    voucherWrapper: {
      alignItems: "center",
      zIndex:99,
      background: "rgba(255,255,255,.1)",
      height:40,
    },
  },
});
