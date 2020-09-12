/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import Account from './Account';

const AppReducers = combineReducers({
  state: Account,
});

export default AppReducers;
