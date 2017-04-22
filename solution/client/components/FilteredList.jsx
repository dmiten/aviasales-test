'use strict'

import React from 'react';

import STYLES from './FilteredListStyles.js';
import Ticket from './Ticket.jsx';

export default class FilteredList extends React.Component {

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
          <Ticket key={JSON.stringify(item)}
                  item={item}
                  index={index}
                  callbackBuy={this.props.buyButtonHandler}
          />
    return (
        <div style={STYLES.list}>
          {
            /* отфильтровать список по количеству стыковок ->
             каждый получившийся отрисовать */
            this.props.ticketsList.filter(
                (item) => filteringPredicate(item)).map(
                (item, index) => renderOneTicket(item, index))
          }
        </div>
    )
  }
}