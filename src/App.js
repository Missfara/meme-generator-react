import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Meme from "./components/Meme";
import boxes from "./components/boxes";
import Box from "./components/Box";

function App(props) {
  let [squares, setSquares] = React.useState(boxes);

  let styles = {
    backgroundColor: props.darkMode ? "teal" : "black",
  };

  let newBox = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));
  console.log(newBox);

  return (
    <div className="App">
      <Header />
      <Meme />
      <Counter />
      {newBox}
    </div>
  );
}

export default App;
