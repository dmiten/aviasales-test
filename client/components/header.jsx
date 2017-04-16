'use strict'

import React from 'react';

import STYLES from './styles.js';
import logo from 'url-loader?mimetype=image/png!../res/logo.png'

export default function () {
  return (
      <div style={STYLES.header}>
        <img style={STYLES.headerLogo} src={logo} />
      </div>
  )
}