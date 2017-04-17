'use strict'

import React from 'react';

import STYLES from './styles.js';
import Ticket from './ticket.jsx';

export default class FilteredListOfTickets extends React.Component {

  render() {

    /* фильтрация по количеству стыковок */
    let filteringPredicate = (item) => {
          if (( item.stops < 4 ) && (this.props.connectionState[item.stops])) {
            return true
          } else {
            return false
          }
        },

        /* сортировка по возрастанию цены */
        sortingPredicate = (item, nextItem) => {
          return (item.price - nextItem.price)
        },

        /* рендер одного билета */
        renderOneTicket = (item, index) =>
            <Ticket key={'tc' + index}
                    name={'tc' + index}
                    item={item}
                    index={index}
                    callbackBuy={this.props.buyButtonHandler}
            />
    return (
        <div style={STYLES.list}>
          {
            this.props.ticketsList.filter(
                (item) => filteringPredicate(item)).sort(
                (item, nextItem) => sortingPredicate(item, nextItem)).map(
                (item, index) => renderOneTicket(item, index))
          }
        </div>
    )
  }
}