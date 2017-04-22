'use strict'

const ASHADOW = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    PSHADOW = '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    STYLES = {
  ticketInactive: {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '5px',
    borderColor: '#ffffff',
    padding: 15,
    marginBottom: 18,
    minHeight: 110,
    backgroundColor: '#ffffff',
    boxShadow: PSHADOW
  },
  ticketActive: {
    display: 'flex',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '5px',
    borderColor: '#ffffff',
    padding: 15,
    marginBottom: 18,
    minHeight: 110,
    backgroundColor: '#ffffff',
    boxShadow: ASHADOW
  },
  tcCarrierLink: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: '50%'
  },
  carrier: {},
  tcTime: {
    fontSize: '170%'
  },
  tcCity: {
    fontWeight: 500
  },
  buttonBuyActive: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '3px',
    width: 120,
    padding: 10,
    fontSize: '200%',
    color: '#ffffff',
    borderColor: '#ff8e07',
    backgroundColor: '#ff8e07'
  },
  buttonBuyInactive: {
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '3px',
    width: 120,
    padding: 10,
    fontSize: '200%',
    color: '#ffffff',
    borderColor: '#ff6d00',
    backgroundColor: '#ff6d00'
  },
  tcDeparture: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    marginLeft: 10,
    borderLeftStyle: 'solid',
    borderLeftWidth: 2,
    borderLeftColor: '#eceff1',
    textAlign: 'left'
  },
  tcDate: {
    fontSize: '70%'
  },
  tcConnections: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '80%',
    paddingLeft: 20
  },
  tcArrival: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 20,
    textAlign: 'right'
  }
}

export default STYLES