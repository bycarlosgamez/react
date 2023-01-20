import React from 'react';

export default function Meme() {
  return (
    <main className='main'>
      <form className='form'>
        <input className='form--input__text' type='text' />
        <input className='form--input__text' type='text' />
        <input
          className='form--input__btn'
          type='submit'
          value='Get a new meme image  🖼'
        />
      </form>
    </main>
  );
}
