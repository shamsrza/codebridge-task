import React from "react";
import "./counter.scss";
const Counter = (props: any) => {
  return <div className="counter">{props.result}</div>;
};

export default Counter;
