import React from "react";

import { Banner } from "./Banner/Banner";
import { styles } from "./Header.style";
export const Header = () => {
  const classes = styles();
  return (
    <div className={classes.Header}>
      <Banner />
    </div>
  );
};
