import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {
  return (
    <div className={id}>
      <h3>{name}</h3>
      <p>date</p>
      <p>time</p>
      <p>number</p>
    </div>
  )
}

export default Card;
