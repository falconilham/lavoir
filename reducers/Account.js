/* eslint-disable prettier/prettier */
export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const INITIAL_STATE = {
  accountInfo: {
    email: '',
  },
  order: {
    email: '',
    weddingDate: '',
    budget: '',
    guest: 0,
  },
};

function handleAddAccount(state, payload) {
  return {
    ...state,
    accountInfo: {
      ...payload.account,
    },
  };
}

function handleAddOrder(state, payload) {
  return {
    ...state,
    order: {
      ...payload.order,
    },
  };
}

function handleRemoveOrder(state) {
  return {
    ...state,
    order: {},
  };
}

function handleLogOut(state) {
  return {
    ...state,
    accountInfo: {},
  };
}

const ACTION = {
  'ACCOUNT/ADD_ACCOUNT': handleAddAccount,
  'ACCOUNT/LOGOUT_ACCOUNT': handleLogOut,
  'ORDER/ADD_ORDER': handleAddOrder,
  'ORDER/REMOVE_ORDER': handleRemoveOrder,
};

export const addAccount = makeActionCreator('ACCOUNT/ADD_ACCOUNT', 'account');
export const logOut = makeActionCreator('ACCOUNT/LOGOUT_ACCOUNT');
export const addOrder = makeActionCreator('ORDER/ADD_ORDER', 'order');
export const removeOrder = makeActionCreator('ORDER/REMOVE_ORDER');

export default function finalState(state = INITIAL_STATE, action) {
  const handler = ACTION[action.type];
  state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
  return handler ? handler(state, action) : state;
}
