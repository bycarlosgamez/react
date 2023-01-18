import React from 'react';

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card--img'>
        <img src={`../images/${props.img}`} className='card--img__photo' />
        <span className='card--img__flag'>sold out</span>
      </div>
      <div className='card--rating'>
        <img src='../images/star.png' className='card--rating__star' />
        <span className='card--rating__score'>{props.rating}</span>
        <span className='card--rating__reviews'>({props.reviewCount})</span>
        <span className='card--rating__bullet'>•</span>
        <span className='card--rating__ctry'>{props.country}</span>
      </div>
      <p className='card--content'>{props.title}</p>
      <p className='card--price'>
        <span className='card--price__bold'>From ${props.price}</span> / person
      </p>
    </div>
  );
}
