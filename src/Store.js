import React, { createContext, useReducer } from 'react';

export const Store = createContext()

const initialize = {
    userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "USER_LOGIN":
            return { ...state, userInfo: action.payload }
        case "SIGNOUT_USER":
            return { ...state, userInfo: null }
        default:
            return state
    }
}

const StoreProvider = (props) => {

    const [state, dispatch] = useReducer(reducer, initialize)

    const value = { state, dispatch }

    return <Store.Provider value={value}>{props.children}</Store.Provider>
};

export default StoreProvider;