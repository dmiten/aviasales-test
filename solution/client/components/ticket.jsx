'use strict'

import React from 'react';

import STYLES from './styles.js';
import {connectionName} from './common-functions.js';
import {DateWithMonthName} from './common-functions.js';
import {dayOfWeek} from './common-functions.js';
import {priceFormat} from './common-functions.js'

export default class Ticket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketStyle: STYLES.ticketInactive,
      buttonBuyStyle: STYLES.buttonBuyInactive
    }
  }

  render() {

    let item = this.props.item,
        index = this.props.index,
        callbackBuy = this.props.callbackBuy,
        /* форматирование имени файла логотипа авиакомпании по её коду */
        carrierLogo = './res/' + item.carrier + '.png',
        flight = './res/flight.png',
        /* совмещенный обработчик расположения курсора
        * ('ticket', 'Active') => setState({ticketStyle: ticketStyleActive}) */
        MouseHandler = (name, ev) => {
          this.setState({[name + 'Style']: STYLES[name + ev]})
        }

    return (
        <div style={this.state.ticketStyle}
             onMouseOver={() => MouseHandler('ticket', 'Active')}
             onMouseOut={() => MouseHandler('ticket', 'Inactive')}
        >
          <div style={STYLES.tcCarrierLink}>
            <div style={STYLES.carrier}>
              <img src={carrierLogo}/>
            </div>
            <br/>
            <div style={this.state.buttonBuyStyle}
                 onMouseOver={() => MouseHandler('buttonBuy', 'Active')}
                 onMouseOut={() => MouseHandler('buttonBuy', 'Inactive')}
                 onClick={() => callbackBuy(item)}
            >
              Купить <br/> за {'\n' + priceFormat(item.price) + ' \u20BD'}
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