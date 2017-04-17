'use strict'

import React from 'react';

import STYLES from './styles.js';
import {connectionName} from './common-functions.js';
import {DateWithMonthName} from './common-functions.js';
import {dayOfWeek} from './common-functions.js';

export default class Ticket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketStyle: STYLES.ticketOut
    }
  }

  render() {

    let item = this.props.item,
        index = this.props.index,
        callbackBuy = this.props.callbackBuy,
        carrierLogo = require(
            'url-loader?mimetype=image/png!../res/' + item.carrier + '.png'),
        flight = require('url-loader?mimetype=image/png!../res/flight.png')

    return (
        <div style={this.state.ticketStyle}
             onMouseOver={() => this.setState({ticketStyle: STYLES.ticketIn})}
             onMouseOut={() => this.setState({ticketStyle: STYLES.ticketOut})}>
          <div style={STYLES.tcCarrierLink}>
            <div style={STYLES.carrier}>
              <img src={carrierLogo}/>
            </div>
            <br/>
            <div style={STYLES.tcLinkButton}
                   id={'tcLinkButton' + index}
                   onClick={() => callbackBuy(item)}>
              Купить <br/> за {'\n' + item.price + ' \u20BD'}
            </div>
          </div>
          <div style={STYLES.tcDeparture}>
            <div style={STYLES.tcTime}>
              {item.departure_time}
            </div>
            <div style={STYLES.tcCity}>
              {item.origin + ', ' + item.origin_name}
            </div>
            <div style={STYLES.tcDate}>
              {DateWithMonthName(item.departure_date) + ', ' + dayOfWeek(
                  item.departure_date)}
            </div>
          </div>
          <div style={STYLES.tcConnections}>
            {connectionName(item.stops)}
            <img src={flight}/>
          </div>
          <div style={STYLES.tcArrival}>
            <div style={STYLES.tcTime}>
              {item.arrival_time}
            </div>
            <div style={STYLES.tcCity}>
              {item.destination_name + ', ' + item.destination}
            </div>
            <div style={STYLES.tcDate}>
              {DateWithMonthName(item.arrival_date) + ', ' + dayOfWeek(
                  item.arrival_date)}
            </div>
          </div>
        </div>
    )
  }
}