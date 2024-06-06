

export const initialState = {
    basket: [],
    };

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const prodid = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (prodid >= 0) {
                newBasket.splice(prodid, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in basket!`
                );
            }
            return {
                ...state,
                basket: newBasket,
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };
        default:
            return state;
    }
};