import React from "react";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  let plus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let minus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // GOOD BUT NOT BEST PRATICE, best to use callback function as done above
  //   let plus = () => {
  //     setCount(count + 1);
  //   };
  //   let minus = () => {
  //     setCount(count - 1);
  //   };

  return (
    <div className="count">
      <button className="count-minus" onClick={minus}>
        -
      </button>
      {/* <div className="counter--count">
        <h1>{count}</h1>
      </div> */}
      <Count number = {count}/>
      <button className="count-plus" onClick={plus}>
        +
      </button>
    </div>
  );
};
export default Counter;
