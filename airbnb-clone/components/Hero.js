import React from 'react';

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero--img__container'>
        <img src='../images/photo-grid.png' className='hero--img__photo' />
      </div>
      <h1 className='hero--title'>Online Experiences</h1>
      <p className='hero--content'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
