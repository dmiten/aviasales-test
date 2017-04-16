'use strict'

import React from 'react';

import loadTickets from './load-tickets.js';
import STYLES from './styles.js';
import SelectingOfConnections from './selecting-of-connections.jsx';
import FilteredListOfTickets from './filtered-list-of-tickets.jsx';
import Header from './header.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketsList: loadTickets(),
      connectionState: Array(4).fill(true)
    }
  }

  setConnection = (type, index, checked) => {
    switch (type) {
      case 'all': {
        if (checked) {
          this.setState({connectionState: Array(4).fill(true)})
        } else {
          this.setState({connectionState: Array(4).fill(false)})
        }
      };
        break;
      case 'only': {
        let newConnectionState = Array(4).fill(false);
        newConnectionState[index] = true;
        this.setState({connectionState: newConnectionState})
      };
        break;
      case 'one': {
        let newConnectionState = this.state.connectionState.slice();
        newConnectionState[index] = !newConnectionState[index];
        this.setState({connectionState: newConnectionState})
      }
    }
  }

  buyButtonHandler = (item) => {
    alert('{родительский обработчик покупки}')
  }

  render() {
    return (
        <div>
          <Header />
          <div style={STYLES.main}>
            <SelectingOfConnections
                connectionState={this.state.connectionState}
                setConnection={this.setConnection}
            />
            <FilteredListOfTickets
                ticketsList={this.state.ticketsList}
                connectionState={this.state.connectionState}
                buyButtonHandler={this.buyButtonHandler}
            />
          </div>
        </div>
    )
  }
}