'use strict'

import React from 'react';

import './Tickets.css';

import {stopName} from './Functions.js';
import {DateWithMonthName} from './Functions.js';
import {dayOfWeek} from './Functions.js';
import {priceFormat} from './Functions.js'

export default function Tickets(props) {

  return (
      <div className='list'>
        {
          props.ticketsList.map(
              (item, index) => ticket(item, index)
          )
        }
      </div>
  )

  function ticket(item, index) {
    let handleBuyButton = props.handleBuyButton,
        carrierLogo = './res/' + item.carrier + '.png',
        flight = './res/flight.png',
        key = JSON.stringify(item);
    return (
        <div className='ticket' key={key}>
          <div className='tcCarrierLink'>
            <div className='carrier'>
              <img src={carrierLogo}/>
            </div>
            <br/>
            <div className='buttonBuy'
                 onClick={() => handleBuyButton(item)}>
              Купить <br/> за {'\n' + priceFormat(item.price) + ' \u20BD'}
            </div>
          </div>
          <div className='tcDeparture'>
            <div className='tcTime'>
              {item.departure_time}
            </div>
            <div className='tcCity'>
              {item.origin + ', ' + item.origin_name}
            </div>
            <div className='tcDate'>
              {DateWithMonthName(item.departure_date) + ', ' + dayOfWeek(
                  item.departure_date)}
            </div>
          </div>
          <div className='tcConnections'>
            {stopName(item.stops)}
            <img src={flight}/>
          </div>
          <div className='tcArrival'>
            <div className='tcTime'>
              {item.arrival_time}
            </div>
            <div className='tcCity'>
              {item.destination_name + ', ' + item.destination}
            </div>
            <div className='tcDate'>
              {DateWithMonthName(item.arrival_date) + ', ' + dayOfWeek(
                  item.arrival_date)}
            </div>
          </div>
        </div>
    )
  }
}