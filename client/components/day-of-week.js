'use strict'

export default function dayOfWeek(date) {
  let _date = date.split('.');
  _date[2] = '20' + _date[2];
  let dateObj = new Date(_date.reverse());
  let dayNumb = dateObj.getDay();
  switch (dayNumb) {
    case 0:
      return ('Вс');
      break;
    case 1:
      return ('Пн');
      break;
    case 2:
      return ('Вт');
      break;
    case 4:
      return ('Ср');
      break;
    case 5:
      return ('Пт');
      break;
    case 6:
      return ('Сб');
      break;
  }
}