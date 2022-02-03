import { MealItemProps } from "../MealItem/interfaces";

export interface MealItemFormProps {
    id: number;
    item: MealItemProps;
    onAddHandler: (amount: number) => void
}