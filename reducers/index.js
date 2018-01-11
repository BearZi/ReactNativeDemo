import { combineReducers } from 'redux';

import cardList from './cardList';

const todoApp = combineReducers({
  cardList
})

export default todoApp
