import React, { createContext, useReducer } from 'react'
import { showsIntialState } from './state/shows';
import { showsReducer } from './reducers/shows';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [showsState, showsDispatch] = useReducer(showsReducer, showsIntialState);
    const value = {
        shows: {
            state: showsState,
            dispatch: showsDispatch
        }
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;