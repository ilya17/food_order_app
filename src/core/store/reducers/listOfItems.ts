import { AnyAction } from "redux";

const listOfItemsReducer = (state: any = { arr: [] }, action: AnyAction) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                arr: [...state.arr, action.value]
            }

        case "REMOVE":
            return state
        default:
            return state;
    }
}

export default listOfItemsReducer;