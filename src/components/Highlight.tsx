import React from "react";

const Highlight =
  () =>
  (children: any, highlightIndex: number): JSX.Element => {
    JSON.stringify(children);
    if ((highlightIndex = 1)) {
      <strong style={{ backgroundColor: "yellow" }}>{children}</strong>;
    }
    return <strong style={{ backgroundColor: "white" }}>{children}</strong>;
  };

export default Highlight;
