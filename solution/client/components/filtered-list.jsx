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
        /* рендер одного билета */
        renderOneTicket = (item, index) =>
            <Ticket key={'tc' + index}
                    item={item}
                    index={index}
                    callbackBuy={this.props.buyButtonHandler}
            />
    return (
        <div style={STYLES.list}>
          {
            /* отфильтровать список по количеству стыковок ->
             отсортировать по возрастанию цены ->
             каждый получившийся отрисовать */
            this.props.ticketsList.filter(
                (item) => filteringPredicate(item)).map(
                (item, index) => renderOneTicket(item, index))
          }
        </div>
    )
  }
}