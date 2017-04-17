'use strict'

const ASHADOW = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    PSHADOW = '0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)',
    STYLES = {
      main: {
        fontFamily: 'Arial, sans-serif',
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
        backgroundColor: '#f3f7fa',
        boxShadow: '0 4px 4px 0 rgba(243, 247, 250, 1), 0 6px 3px 0 rgba(243, 247, 250, 0.19)'
      },
      headerLogo: {

      },
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
        justifyContent: 'start',
        alignItems: 'center',
        padding: 5,
        backgroundColor: '#f1fcff'
      },
      lineInSelectingInactive: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
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
        paddingTop: 75
      },
      ticketOut: {
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
      ticketIn: {
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
      tcLinkButton: {
        textAlign: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: '3px',
        width: '120',
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
    };

export default STYLES