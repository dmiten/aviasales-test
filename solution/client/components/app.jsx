'use strict'

import React from 'react';

import STYLES from './styles.js';
import SelectingOfConnections from './connections-set.jsx';
import FilteredListOfTickets from './filtered-list.jsx';
import Header from './header.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketsList: [],
      connectionState: Array(4).fill(true)
    }
  }

  componentDidMount() {
    fetch('./res/tickets.json')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        ticketsList: data.tickets.sort(
            (item, nextItem) => item.price - nextItem.price)
      })
    }).catch((e) => {
      console.error(e.message);
    })
  }

  /* обработчик выбора количества стыковок для SelectingOfConnections */
  setConnection = (type, index, checked) => {
    switch (type) {
      /* вкл/выкл все */
      case 'all': {
        this.setState({connectionState: Array(4).fill(checked)})
      }
        break;
      /* выбран единственный пункт */
      case 'only': {
        let newConnectionState = Array(4).fill(false);
        newConnectionState[index] = true;
        this.setState({connectionState: newConnectionState})
      }
        break;
      /* вкл/выкл один из пунктов */
      case 'one': {
        let newConnectionState = this.state.connectionState.slice();
        newConnectionState[index] = !newConnectionState[index];
        this.setState({connectionState: newConnectionState})
      }
    }
  }

  buyButtonHandler = (item) => {
    alert('{родительский обработчик покупки} ' + item.price)
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