import { AnyAction } from "redux";
import { MealItemProps } from "../../../components/Meals/MealItem/interfaces";

const listOfMeals = JSON.parse(localStorage.getItem('listOfMeals') as string)

const listOfItemsReducer = (state: any = listOfMeals || { arr: [] }, action: AnyAction) => {
    switch (action.type) {
        case "ADD":
            const uniqueArray: MealItemProps[] = []
            const list = [...state.arr, ...action.value];
            list.forEach(item => {
                let findIndex = uniqueArray.findIndex(uniqueItem => uniqueItem.id === item.id);
                findIndex > -1 ? uniqueArray[findIndex].amountItems += 1 : uniqueArray.push({ ...item });
            });
            localStorage.setItem('listOfMeals', JSON.stringify({ ...state, arr: uniqueArray }));
            return {
                ...state,
                arr: uniqueArray
            };
        case "REMOVE":
            return state;
        default:
            return state;
    }
}

export default listOfItemsReducer;