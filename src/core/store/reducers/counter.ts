import { AnyAction } from "redux";

const counter = Number(localStorage.getItem('counter'))

const counterReducer = (state = counter || 0, action: AnyAction) => {
    switch (action.type) {
        case "INCREMENT":
            return state + Number(action.value);
        case "DECREMENT":
            return state - Number(action.value);
        default:
            return state;
    }
}

export default counterReducer;