'use strict'

export default function connectionName(index) {
  switch (index) {
    case 0:
      return ('без пересадок');
      break;
    case 1:
      return ('1 пересадка');
      break;
    case 2:
      return ('2 пересадки');
      break;
    case 3:
      return ('3 пересадки');
      break;
  }
}