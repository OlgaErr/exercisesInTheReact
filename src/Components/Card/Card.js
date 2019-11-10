import React from 'react';
import './Card.css'

function Card({date, comment, amount}) {
  return (
    <div className='Card'>
      <div className='date'>{date}</div>
      <div className='comment'>{comment}</div>
      <div className='amount'>{amount + ' руб.'}</div>
    </div>
  );
}

export default Card;