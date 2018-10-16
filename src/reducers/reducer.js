import { combineReducers } from 'redux';
import { timer } from './timer';
import { tab } from './tab';

export const reducer = combineReducers({
  timer,
  tab
})