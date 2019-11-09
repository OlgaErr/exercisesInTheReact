import React from 'react';
import { PAYMENTS } from './../../constants';
import Card from './../../Components/Card/Card';

export default function CardList() {
  let cards = PAYMENTS.map(
    (item, index) => (
      <Card
        key={index}
        date={item.date}
        comment={item.comment}
        amount={item.amount}
      />
    )
  );
  return (
    <div className='cardList'>
      {cards}
    </div>
  );
};