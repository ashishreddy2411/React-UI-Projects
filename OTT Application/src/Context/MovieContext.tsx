import React, { useReducer, createContext, ReactNode, useContext } from 'react';
import { State } from './reducer';

type Props = {
    children: ReactNode,
    reducer: React.Reducer<State, any>,
    initialState: State
}

export const MovieContext = createContext<[State, React.Dispatch<any>]>([{} as State, () => {}]);

export const MovieProvider = ({ reducer, initialState, children }: Props) => {
    return (
        <MovieContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </MovieContext.Provider>
    );
};

export const useFavourites = () => useContext(MovieContext);
