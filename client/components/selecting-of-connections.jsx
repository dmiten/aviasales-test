'use strict'

import React from 'react';

import STYLES from './styles.js';
import LineInSelecting from './line-in-selecting.jsx';

export default class SelectingOfConnections extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allSelectingStyle: STYLES.allSelectingInactive
    }
  }

  renderLineInSelecting = (index) => {
    return (
        <LineInSelecting
            key={'cs' + index}
            name={'cs' + index}
            index={index}
            checked={this.props.connectionState[index]}
            setConnection={this.props.setConnection}
        />
    )
  }

  render() {
    let checked = this.props.connectionState.reduce(
        (previous, current) => previous && current);
    return (
        <div style={STYLES.selecting}>
          <form name='SelectingOfConnections'>
            &emsp; КОЛИЧЕСТВО ПЕРЕСАДОК &emsp;
            <br/>
            <br/>
            <div style={this.state.allSelectingStyle}
                 onClick={() => this.props.setConnection('all', -1, !checked)}
                 onMouseOver={() => this.setState(
                     {allSelectingStyle: STYLES.allSelectingActive})}
                 onMouseOut={() => this.setState(
                     {allSelectingStyle: STYLES.allSelectingInactive})}
            >
              &emsp;
              <input key={'csAll'}
                     type='checkbox'
                     checked={checked}
                     value='Все'
                     onChange={() => this.props.setConnection('all', -1,
                         !checked)}
              />
              все
            </div>
            {this.props.connectionState.map(
                (item, index) => this.renderLineInSelecting(index))}
          </form>
        </div>
    )
  }
}