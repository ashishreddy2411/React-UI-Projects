import React from 'react'
import { createContext, useContext,useReducer} from 'react'
export const BasketContext = createContext()

export const BasketProvider = ({reducer,initialState,children}) => {
    return (
        <BasketContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </BasketContext.Provider>
    )
}

export const useBasketValue = () => useContext(BasketContext)