import React from "react";
import { useState, useEffect } from "react";

let Meme = () => {
  let [allMemes, setAllMemes] = useState("");
  let [url, setUrl] = useState("");

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        let adjustedArr = data.data.memes.map((item) => {
          return {
            ...item,
            url: item.url.replace("\\", ""),
          };
        });
        // console.log(adjustedArr)
        setAllMemes(adjustedArr);
      });
  }, []);

  let memeG = (event) => {
    let link;
    event.preventDefault();
    const memeArray = allMemes;
    const randomMeme = Math.floor(Math.random() * memeArray.length);
    link = memeArray[randomMeme].url;
    setUrl(link);
    console.log(link);
  };

  return (
    <div>
      <form className="item">
        <input className="left" type="text" placeholder="Shut up" />
        <input className="right" type="text" placeholder="and take my Money" />
        <button className="btn" onClick={memeG}>
          Get a new meme Image
        </button>

        {url ? <img src={url} alt="edward" /> : null}
      </form>
    </div>
  );
};
export default Meme;
