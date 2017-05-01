'use strict'

import React from 'react';

import STYLES from './Stops.css';

import {stopName} from './Functions.js';

export default function Stops(props) {

  let checked = props.stops.reduce(
      (previous, current) => previous && current);
  return (
      <div className='selecting'>
        <form>
          {'\u2003\u00A0 КОЛИЧЕСТВО ПЕРЕСАДОК \u2003\u00A0'}
          <br/><br/>
          <div className='allSelecting'>
            <input type='checkbox'
                   id='allStops'
                   checked={checked}
                   onClick={() => props.handleSetStops('all', -1, !checked)}
                   onChange={() => props.handleSetStops('all', -1, !checked)}>
            </input>
            <label htmlFor='allStops'>
              <span/>
              Все
            </label>
          </div>
          {props.stops.map((item, index) => stop(item, index))}
        </form>
      </div>
  )

  function stop(item, index) {
    let checked = props.stops[index],
        boxName = stopName(index),
        onSetStop = props.handleSetStops;
    return (
        <div className='lineInSelecting'
             key={index}>
          <input type='checkbox'
                 id={index}
                 checked={checked}
                 onChange={() => props.handleSetStops('one', index)}>
          </input>
          <label htmlFor={index}>
            <span/>
            {boxName}
          </label>
          <div className='onlySelecting'
               onClick={() => props.handleSetStops('only', index)}
               onMouseOver={() => onSetStop = () => null}
               onMouseOut={() => onSetStop = props.handleSetStops}>
            только
          </div>
        </div>
    )
  }
}