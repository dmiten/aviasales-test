'use strict'

const STYLES = {
  selecting: {
    top: 95,
    left: 70,
    fontSize: '80%',
    display: 'flex',
    position: 'fixed',
    flexDirection: 'column',
    borderStyle: 'solid',
    paddingTop: 15,
    paddingBottom: 15,
    borderWidth: 1,
    borderRadius: '5px',
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
  },
  allSelectingActive: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#f1fcff'
  },
  allSelectingInactive: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ffffff'
  },
}

export default STYLES