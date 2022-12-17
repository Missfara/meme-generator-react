import React from "react";
import { useState, useEffect } from "react";

let Meme = () => {
  let [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setAllMemes(data.data.memes);
      });
  }, []);

  let memeG = () => {
    const memeArray = allMemes;
    const randomMeme = Math.floor(Math.random() * memeArray.length);
  };

  return (
    <div>
      <form className="item">
        <input className="left" type="text" placeholder="Shut up" />
        <input className="right" type="text" placeholder="and take my Money" />
        <button onClick={memeG}>Get a new meme Image</button>
      </form>
    </div>
  );
};
export default Meme;
