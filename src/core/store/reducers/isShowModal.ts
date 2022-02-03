import { AnyAction } from "redux";

const showModalReducer = (state = false, action: AnyAction) => {
    switch (action.type) {
        case 'SHOW':
            return true;
        case 'HIDE':
            return false;
        default:
            return state;
    }
}

export default showModalReducer;