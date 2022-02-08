import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../../core/store/actions/counterAction";
import { addItem } from "../../../core/store/actions/listOfItemsAction";
import { Button } from "../../UI/Button/Button"
import { Input } from "../../UI/Input/Input"
import { MealItemFormProps } from "./interfaces";
import { FormStyled } from "./styled"

export const MealItemForm = ({ id, item, onAddHandler }: MealItemFormProps) => {
    const [inputValue, setInputValue] = useState('1');

    const dispatch = useDispatch();

    const handleInput = (value: string) => setInputValue(value)

    const handleAddPosition = useCallback(() => {
        dispatch(increment(inputValue));
        dispatch(addItem(item))
        onAddHandler(Number(inputValue));
        setInputValue('1');
    }, [dispatch, inputValue, item, onAddHandler])

    return <FormStyled>
        <Input
            id={`amount_${id}`}
            htmlFor={`amount_${id}`}
            label="Количество"
            type="number"
            value={inputValue}
            onChange={handleInput}
        />
        <Button name="Добавить" onClick={handleAddPosition} />
    </FormStyled>
}