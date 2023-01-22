import React from 'react';
import memesData from '../memesData.js';

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState('');

  function getMeme() {
    const memes = memesData.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    const { url } = memes[random];
    setMemeImage(url);
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
      <img src={memeImage} className='meme--image' />
    </main>
  );
}
