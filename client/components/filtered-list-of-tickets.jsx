'use strict'

import React from 'react';

import STYLES from './styles.js';
import Ticket from './ticket.jsx';

export default class FilteredListOfTickets extends React.Component {

  render() {
    let filteringPredicate = (item) => {
          if (( item.stops < 4 ) && (this.props.connectionState[item.stops])) {
            return true
          } else {
            return false
          }
        },
        sortingPredicate = (item, nextItem) => {
          return (item.price - nextItem.price)
        },
        renderOneTicket = (item, index) =>
            <Ticket key={'tc' + index}
                    name={'tc' + index}
                    item={item}
                    index={index}
                    callbackBuy={this.props.buyButtonHandler}
            />
    return (
        <div style={STYLES.list}
             name='FilteredListOfTickets'
        >
          {
            this.props.ticketsList.sort(
                (item, nextItem) => sortingPredicate(item, nextItem)).filter(
                (item) => filteringPredicate(item)).map(
                (item, index) => renderOneTicket(item, index))
          }
        </div>
    )
  }
}