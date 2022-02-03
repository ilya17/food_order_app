import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allState } from "../../core/store"
import { hide } from "../../core/store/actions/modalAction"
import { MealItemProps } from "../Meals/MealItem/interfaces"
import { Button } from "../UI/Button/Button"
import { Modal } from "../UI/Modal"
import { CartItem } from "./CartItem"
import { ActionsStyled, ListStyled, TotalStyled } from "./styled"

export const Cart = () => {

    const dispatch = useDispatch();

    const totalPrice: number = useSelector((state: allState) => state.totalPrice);
    const itemList: MealItemProps[] = useSelector((state: allState) => state.listOfItem.arr);

    const uniqueArray: MealItemProps[] = useMemo(() => [], []);

    itemList.forEach(item => {
        let findIndex = uniqueArray.findIndex(uniqueItem => uniqueItem.id === item.id);
        findIndex > -1 ? uniqueArray[findIndex].amountItems += 1 : uniqueArray.push({ ...item });
    })

    const memoList = useMemo(() => {
        return (
            uniqueArray.map(({ id, name, description, price, amountItems }) =>
                <CartItem
                    id={id}
                    name={name}
                    description={description}
                    price={price}
                    amountItems={amountItems}
                    key={id} />
            )
        )
    }, [uniqueArray])

    return (
        <Modal>
            <ListStyled>
                {memoList}
            </ListStyled>
            <div>
                <TotalStyled>
                    <span>Итоговая стоимость</span>
                    <span>{totalPrice} ₽</span>
                </TotalStyled>
                <ActionsStyled>
                    <Button onClick={() => dispatch(hide())} name="Закрыть" />
                    <Button name="Заказать" />
                </ActionsStyled>
            </div>
        </Modal>
    )
}