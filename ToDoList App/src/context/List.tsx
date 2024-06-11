import {createContext, useReducer,useContext } from 'react';
import {initialState,reducer } from '../context/reducer';

type Task = {
    id: number,
    title: string,
    description: string
}

type State = {
    newState: Task[];
    inProgress: Task[];
    inReview: Task[];
    completed: Task[];
  };

export const ListContext = createContext<[State, React.Dispatch<any>]>([{} as State, () => {}]);


export const ListProvider = ({children}: {children: React.ReactNode}) => {

    return (
        <ListContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </ListContext.Provider>
    )
}

export const useTaskManager = () => useContext(ListContext);
