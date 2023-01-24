import React from 'react';
import memesData from '../memesData.js';

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMeme() {
    const memes = memesData.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    const { url } = memes[random];
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <main className='main'>
      <div className='form'>
        <input
          className='form--input__text'
          type='text'
          placeholder='Top Text'
        />
        <input
          className='form--input__text'
          type='text'
          placeholder='Bottom Text'
        />
        <button onClick={getMeme} className='form--input__btn'>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} className='meme--image' />
    </main>
  );
}
