'use strict'

/* приведение формата даты к стандартному в js*/
let translateToStandart = (date) => {
  let _date = date.split('.');
  _date[3] = '20' + _date[2] + '/' + _date[1] + '/' + _date[0]
  return (new Date(_date[3]))
}

/* получение и форматирование даты вида '5 мая 2017' */
export function DateWithMonthName(date) {
  const YEAR = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен',
    'окт', 'ноя', 'дек'];
  let _date = translateToStandart(date)
  return (_date.getDay() + ' ' + YEAR[_date.getMonth()] + ' '
  + _date.getFullYear())
}

/* получение символьного дня недели */
export function dayOfWeek(date) {
  const WEEK = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  let dayNumb = translateToStandart(date).getDay()
  return (WEEK[dayNumb])
}

/* форматирование стоимости вида '11 000'*/
export function priceFormat(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u2005')
}

/* получение и форматирование строкового значения количества пересадок */
export function stopName(index) {
  let name = ['Без пересадок', '1 пересадка \u00A0 \u00A0',
    '2 пересадки \u00A0 \u00A0', '3 пересадки \u00A0 \u00A0']
  return (name[index])
}