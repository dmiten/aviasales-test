'use strict'

import React from 'react';

import './App.css';

import Stops from './Stops.jsx';
import Tickets from './Tickets.jsx';
import Header from './Header.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.TICKETS = [];
    this.state = {
      ticketsList: [],
      stops: Array(4).fill(true)
    }
  }

  componentDidMount() {
    fetch('./res/tickets.json')
    .then((res) => res.json())
    .then((data) => {
      this.TICKETS = data.tickets.sort(
          (item, nextItem) => item.price - nextItem.price);
      this.setState({ticketsList: this.TICKETS})
    })
    .catch((e) => {
      console.error(e.message);
    })
  }

  handleSetStops = (type, index, checked) => {
    let newStops = [],
        newTcketsList = [],
        filteringPredicate = (item) => {
          if (( item.stops < 4 ) && (newStops[item.stops])) {
            return true
          } else {
            return false
          }
        };
    switch (type) {
      case 'all': {
        newStops = Array(4).fill(checked)
      }
        break
      case 'only': {
        newStops = Array(4).fill(false);
        newStops[index] = true
      }
        break
      case 'one': {
        newStops = this.state.stops.slice();
        newStops[index] = !newStops[index]
      }
    }
    newTcketsList = this.TICKETS.filter((item) => filteringPredicate(item));
    this.setState({stops: newStops, ticketsList: newTcketsList})
  }

  handleBuyButton = (item) => {
    alert('{родительский обработчик покупки} ' + item.price)
  }

  render() {
    return (
        <div>
          <Header />
          <div className='main'>
            <Stops
                stops={this.state.stops}
                handleSetStops={this.handleSetStops}>
            </Stops>
            <Tickets
                ticketsList={this.state.ticketsList}
                stops={this.state.stops}
                handleBuyButton={this.handleBuyButton}>
            </Tickets>
          </div>
        </div>
    )
  }
}