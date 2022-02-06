import React from "react";
import { styles } from "./Banner.style";
import { VoucherBar } from "../VoucherBar/VoucherBar";
import { Navbar } from "../Navbar/Navbar";
import bannerImage from "../../../assets/team-discussion.svg";
export const Banner = () => {
  const classes = styles();
  return (
    <div className={classes.banner}>
      <VoucherBar />
      <Navbar />
      <div className={classes.content}>
        <div className={classes.txt}>
          <h1>You move out, we clean up.</h1>
          <p>The simplest way to get your bond back. Guaranteed.*</p>
        </div>
        <img
          src={bannerImage}
          className={classes.bannerImg}
          alt="It contains people connecting and working"
        />
      </div>
    </div>
  );
};
