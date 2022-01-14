import React from 'react';

export default function Card() {
  return (
    <div className='card'>
      <div className='card--img'>
        <img src='../images/katie-zaferes.png' className='card--img__photo' />
        <span className='card--img__flag'>sold out</span>
      </div>
      <div className='card--rating'>
        <img src='../images/star.png' className='card--rating__star' />
        <span className='card--rating__score'>5.0</span>
        <span className='card--rating__reviews'>(6)</span>
        <span className='card--rating__bullet'>•</span>
        <span className='card--rating__ctry'>USA</span>
      </div>
      <p className='card--content'>Life lessons with Katie Zaferes</p>
      <p className='card--price'>
        <span className='card--price__bold'>From $136</span> / person
      </p>
    </div>
  );
}
