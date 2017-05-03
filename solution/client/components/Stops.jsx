'use strict'

import React from 'react';

import STYLES from './Stops.css';

import {stopName} from './Functions.js';

export default function Stops(props) {

  let checked = props.stops.reduce(
      (previous, current) => previous && current),
      handleSetStopsAll = () => props.handleSetStops('all', -1, !checked);
  return (
      <div className='selecting'>
        <form>
          {'\u2003\u00A0 КОЛИЧЕСТВО ПЕРЕСАДОК \u2003\u00A0'}
          <br/><br/>
          <div className='allSelecting'>
            <input type='checkbox'
                   id='allStops'
                   checked={checked}
                   onClick={handleSetStopsAll}
                   onChange={handleSetStopsAll}>
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
        handleSetStopsOne = () => props.handleSetStops('one', index),
        handleSetStopsOnly = () => props.handleSetStops('only', index);
    return (
        <div className='lineInSelecting'
             key={index}>
          <input type='checkbox'
                 id={index}
                 checked={checked}
                 onChange={handleSetStopsOne}>
          </input>
          <label htmlFor={index}>
            <span/>
            {boxName}
          </label>
          <div className='onlySelecting'
               onClick={handleSetStopsOnly}>
            только
          </div>
        </div>
    )
  }
}