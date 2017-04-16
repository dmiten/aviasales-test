'use strict'

import React from 'react';

import STYLES from './styles.js';
import connectionName from './connection-name.js';

export default class LineInSelecting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      mouseOverOnly: false
    }
  }

  render() {
    let index = this.props.index,
        checked = this.props.checked,
        boxName = connectionName(index),
        setConnectionLine = this.props.setConnection,
        setConnectionOnly = () => null,
        lineInSelectingStyle = STYLES.lineInSelectingInactive,
        onlySelectingStyle = STYLES.onlySelectingInactive;
    if (this.state.mouseOver) {
      lineInSelectingStyle = STYLES.lineInSelectingActive;
      onlySelectingStyle = STYLES.onlySelectingActive
    }
    if (this.state.mouseOverOnly) {
      setConnectionOnly = this.props.setConnection;
      setConnectionLine = () => null
    }
    return (
        <div style={lineInSelectingStyle}
             id={'l' + index}
             onClick={() => setConnectionLine('one', index)}
             onMouseOver={() => this.setState({mouseOver: true})}
             onMouseOut={() => this.setState({mouseOver: false})}
        >
          <div>
            &emsp;
            <input type='checkbox'
                   value={boxName}
                   checked={checked}
                   onChange={() => setConnectionLine('one', index)}
            />
            {boxName}
          </div>
          <div style={onlySelectingStyle}
               id={'o' + index}
               onClick={() => setConnectionOnly('only', index)}
               onMouseOver={() => this.setState({mouseOverOnly: true})}
               onMouseOut={() => this.setState({mouseOverOnly: false})}
          >
            только &ensp;
          </div>
        </div>
    )
  }
}