import React from "react";
import { styles } from "./VoucherBar.style";
export const VoucherBar = () => {
  const classes = styles();
  return (
    <div className={classes.voucherWrapper}>
      <p className={classes.voucherTxt}>
        try voucher code <b className={classes.code}>father20</b> for{" "}
        <b className={classes.code}>20%</b>
        😜 Expires 30/9/2021
      </p>
    </div>
  );
};
