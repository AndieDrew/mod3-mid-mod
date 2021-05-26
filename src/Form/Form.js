import React, { Component } from 'react';
import './Form.css';

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

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='title'
          value={this.state.name}
        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='description'
          value={this.state.date}
        />

        <input
          type='text'
          placeholder='Time'
          name='description'
          value={this.state.time}
        />

        <input
          type='text'
          placeholder='Number of guests'
          name='description'
          value={this.state.number}
        />

        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
