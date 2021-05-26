import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../api-calls';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
  super();
   this.state = {
     reservations: [],
   }
 }

  componentDidMount() {
    getReservations()
    .then(data => {
      this.setState({ reservations: data })
      console.log(this.state.reservations);
    })
    .catch(error => this.setState({ error: 'Something went wrong!'}))
  }

  addReservation = ( newRes ) => {
   this.setState({ reservations: [...this.state.reservations, newRes] });
 }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations res = {this.state.reservations}/>
        </div>
      </main>
    )
  }
}

export default App;
