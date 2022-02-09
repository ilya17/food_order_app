import { MealItemProps } from "../../../components/Meals/MealItem/interfaces"

export const addItem = (value: MealItemProps[]) => {
    return {
        type: 'ADD',
        value
    }
}

export const removeItem = (value: MealItemProps) => {
    return {
        type: 'REMOVE',
        value
    }
}