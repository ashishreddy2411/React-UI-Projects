import {createContext, useReducer,useContext } from 'react';
import {initialState,reducer } from '../context/reducer';

type Project = {
    id: number;
    name: string;
    newState: Task[],
    inProgress: Task[]
    inReview: Task[],
    completed: Task[]
  };

type Task = {
    pid: number,
    id: number,
    title: string,
    description: string
}

type State = {
    Projects: Project[];
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
