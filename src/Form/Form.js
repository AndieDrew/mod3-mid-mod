import React, { Component } from 'react';
import './Form.css';
import { postReservations } from '../api-calls';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
}

bookReservation = event => {
  event.preventDefault();
  const newRes = {
    id: Date.now(),
    ...this.state
  }
  this.props.addReservation(newRes);
  this.clearInputs();
  postReservations( this.state )
}

clearInputs = () => {
  this.setState({ name: '', date: '', time: '', number: '' });
}

  render() {
    return (
      <form className='form'>
        <input
          className='name'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          className='date'
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          className='time'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          className='number'
          type='text'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button onClick={event => this.bookReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
