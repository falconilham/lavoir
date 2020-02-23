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
    accountInfo: {},
};



function handleAddAccount(state, payload) {
    return {
        ...state,
        accountInfo: payload.account,
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
};

export const addAccount = makeActionCreator('ACCOUNT/ADD_ACCOUNT', 'account');
export const logOut = makeActionCreator('ACCOUNT/LOGOUT_ACCOUNT');

export default function users(state = INITIAL_STATE, action) {
    const handler = ACTION[action.type];
    state = action.type === ACTION.RESET_STATE ? INITIAL_STATE : state;
    return handler ? handler(state, action) : state;
}
