import React from "react";

let Box = (props) => {
  let styles = {
    backgroundColor: props.on ? "teal" : "black",
  };

  return (
    <div>
      <div style={styles} className="box"></div>
    </div>
  );
};
export default Box;
