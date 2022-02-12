import React from "react";
import { styles } from "./Terms.style";
export const Terms = () => {
  const classes = styles();
  return (
    <div>
      <span className={classes.spanTxt}>*Our Bond Back Guarantee: </span>
      <ol className={classes.list}>
        <li>
          You are required to confirm with your real estate agent which specific
          cleaning services are required under your lease agreement. You must
          ensure that you tick the appropriate checkboxes on our cleaning
          checklist when booking a Clean.
        </li>
        <li>
          If, within 72 hours after your Clean, we are notified by you or your
          real estate agent that a part of our Services (as described in your
          Booking and in our cleaning checklist) has not been completed
          satisfactorily to allow your tenancy bond to be released back to you,
          we will come back to your Residence to re-perform those Services for
          no additional fee (Bond Back Guarantee). Any such notification should
          include photographs evidencing the areas that need to be addressed and
          we will make an assessment of whether the area is cleanable.
        </li>
        <li>
          Our Bond Back Guarantee does not cover the following
          <ol type="a">
            <li>
              cleaning services not described in your Booking or cleaning
              checklist available on the Site;
            </li>
            <li>
              {" "}
              permanent damage at your Residence, including smoke stains, carpet
              stains, hard water stains, wall marks, mould, rusting, grease
              stains, and permanent odours; and
            </li>
            <li>
              areas which, in our professional opinion, cannot be cleaned.
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
};
