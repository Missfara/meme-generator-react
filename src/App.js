import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Meme from "./components/Meme";


function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      <Counter/>
    </div>
  );
}

export default App;
