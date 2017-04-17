'use strict'

/* приведение формата даты к стандартному в js*/
let translateToStandart = (date) => {
  let _date = date.split('.');
  _date[2] = '20' + _date[2];
  return (new Date(_date.reverse()))
}

export function DateWithMonthName(date) {
  const YEAR = ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен',
    'окт', 'ноя', 'дек'];
  let _date = translateToStandart(date);
  return (_date.getDay() + ' ' + YEAR[_date.getMonth()] + ' '
  + _date.getFullYear())
}

export function dayOfWeek(date) {
  const WEEK = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  let dayNumb = translateToStandart(date).getDay();
  return (WEEK[dayNumb])
}

export function connectionName(index) {
  let name = ['Без пересадок', '1 пересадка \u00A0 \u00A0',
    '2 пересадки \u00A0 \u00A0', '3 пересадки \u00A0 \u00A0'];
  return (name[index])
}