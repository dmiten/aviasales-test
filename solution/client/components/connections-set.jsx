'use strict'

import React from 'react';

import STYLES from './styles.js';
import LineInSelecting from './connection-each.jsx';

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
            index={index}
            checked={this.props.connectionState[index]}
            setConnection={this.props.setConnection}
        />
    )
  }

  render() {

    /* если выбраны все варианты -> вкл. 'все' */
    let checked = this.props.connectionState.reduce(
        (previous, current) => previous && current),
        checkBoxPic = {},
        allSelectingMouseHandler = (ev) => {
        this.setState({allSelectingStyle: STYLES['allSelecting' + ev]})
        }

    if (checked) {
      checkBoxPic = './res/check-box-checked.png'
    } else {
      checkBoxPic = './res/check-box.png';
    }

    return (
        <div style={STYLES.selecting}>
          <form name='SelectingOfConnections'>
            {'\u2003\u00A0 КОЛИЧЕСТВО ПЕРЕСАДОК \u2003\u00A0'}
            <br/>
            <br/>
            <div style={this.state.allSelectingStyle}
                 onClick={() => this.props.setConnection('all', -1, !checked)}
                 onMouseOver={() => allSelectingMouseHandler('Active')}
                 onMouseOut={() => allSelectingMouseHandler('Inactive')}
            >
              {'\u2003\u00A0'}<img src={checkBoxPic}/>{'\u00A0'}Все
            </div>
            {this.props.connectionState.map(
                (item, index) => this.renderLineInSelecting(index))
            }
          </form>
        </div>
    )
  }
}