'use strict'

const ASHADOW = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    PSHADOW = '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    STYLES = {
      main: {
        cursor: 'default',
        userSelect: 'none',
        display: 'flex',
        padding: 20,
        margin: '0 auto',
        color: '#4a4a4a',
        backgroundColor: '#f3f7fa'
      },
      header: {
        width: 960,
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f3f7fa'
      },
      headerLogo: {

      },
      selecting: {
        top: 90,
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
        boxShadow: PSHADOW
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
      lineInSelectingActive: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f1fcff'
      },
      lineInSelectingInactive: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#ffffff'
      },
      onlySelectingActive: {
        visibility: 'visible',
        color: '#3e9ce8'
      },
      onlySelectingInactive: {
        visibility: 'hidden',
        color: '#3e9ce8'
      },
      list: {
        flexDirection: 'column',
        paddingLeft: 270,
        paddingTop: 72
      },
      ticketOut: {
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: '5px',
        borderColor: '#ffffff',
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        boxShadow: PSHADOW
      },
      ticketIn: {
        display: 'flex',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: '5px',
        borderColor: '#ffffff',
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        boxShadow: ASHADOW
      },
      tcCarrierLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      carrier: {},
      tcTime: {
        fontSize: '200%'
      },
      tcCity: {
        fontWeight: 600
      },
      tcLinkButton: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: '3px',
        borderColor: '#ff6d00',
        padding: 10,
        backgroundColor: '#ff6d00'
      },
      tcDeparture: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        marginLeft: 10,
        borderLeftStyle: 'solid',
        borderLeftWidth: 2,
        borderLeftColor: '#eceff1'
      },
      tcConnections: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20
      },
      tcArrival: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 20
      }
    };

export default STYLES