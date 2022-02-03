import showModalReducer from './reducers/isShowModal';
import counterReducer from './reducers/counter';
import { combineReducers } from 'redux';
import totalPriceReducer from './reducers/totalPrice';
import listOfItemsReducer from './reducers/listOfItems';

export const allReducer = combineReducers({
    isShowModal: showModalReducer,
    counter: counterReducer,
    totalPrice: totalPriceReducer,
    listOfItem: listOfItemsReducer
})

export type allState = ReturnType<typeof allReducer>