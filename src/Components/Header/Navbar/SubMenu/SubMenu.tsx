import React,{FC} from "react";
import { styles } from "./SubMenu.style";

type Props={
  items:JSX.Element
}

export const SubMenu:FC<Props> = ({items}) => {
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      {items}
    </div>
  );
};
