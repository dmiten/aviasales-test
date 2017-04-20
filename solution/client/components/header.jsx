'use strict'

import React from 'react';

import STYLES from './styles.js';

export default function () {
  return (
      <div style={STYLES.header}>
        <img style={STYLES.headerLogo} src={'./res/logo.png'} />
      </div>
  )
}