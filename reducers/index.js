/* eslint-disable prettier/prettier */
import { combineReducers, createStore } from 'redux';
import Account from './Account';

const AppReducers = combineReducers({
    Account,
});

const rootReducer = (state, action) => {
    return AppReducers(state, action);
};

let store = createStore(rootReducer);

export default store;
