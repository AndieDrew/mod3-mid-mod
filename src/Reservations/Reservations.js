import React from 'react';
import './Reservations.css';
import Card from '../Card/Card.js';

const Reservations = ({ res }) => {
  const resCards = res.map(element => {
  return (
    <Card
      id={element.id}
      name={element.name}
      date={element.date}
      time={element.time}
      number={element.number}
    />
  )
})


  return (
  <div className='res-cards'>
    {resCards}
  </div>
  )
}

export default Reservations;
