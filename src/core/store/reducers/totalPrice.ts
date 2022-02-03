import { AnyAction } from "redux";

const totalPrice = Number(localStorage.getItem('totalPrice'))

const totalPriceReducer = (state = totalPrice || 0, action: AnyAction) => {
    switch (action.type) {
        case "INCREMENT_PRICE":
            return state + action.value;
        case "DECREMENT_PRICE":
            return state - action.value;
        default:
            return state;
    }
}

export default totalPriceReducer;