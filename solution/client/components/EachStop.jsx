'use strict'

import React from 'react';

import STYLES from './EachStopStyles.js';
import {connectionName} from './CommonFunctions.js';

export default class EachStop extends React.Component {

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
        onlySelectingStyle = STYLES.onlySelectingInactive,
        checkBoxPic = './res/check-box.png';

    if (checked) checkBoxPic = './res/check-box-checked.png';

    if (this.state.mouseOver) {
      lineInSelectingStyle = STYLES.lineInSelectingActive;
      onlySelectingStyle = STYLES.onlySelectingActive
    }

    /* при мышке над эл-том 'только' обработка клика переходит к его обработчику */
    if (this.state.mouseOverOnly) {
      setConnectionOnly = this.props.setConnection;
      setConnectionLine = () => null
    }

    return (
        <div style={lineInSelectingStyle}
             onClick={() => setConnectionLine('one', index)}
             onMouseOver={() => this.setState({mouseOver: true})}
             onMouseOut={() => this.setState({mouseOver: false})}
        >
          {'\u2003\u00A0'}<img src={checkBoxPic}/>{'\u00A0'}
          <div>
            {boxName}
          </div>
          <div style={onlySelectingStyle}
               onClick={() => setConnectionOnly('only', index)}
               onMouseOver={() => this.setState({mouseOverOnly: true})}
               onMouseOut={() => this.setState({mouseOverOnly: false})}
          >
            {'\u2003\u00A0\u2003\u00A0'}только
          </div>
        </div>
    )
  }
}