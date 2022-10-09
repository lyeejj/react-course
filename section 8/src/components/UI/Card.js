import React from "react";

// class module 사용할때의 구문
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
