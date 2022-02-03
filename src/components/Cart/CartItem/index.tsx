import { Button } from "../../UI/Button/Button"
import { CartItemProps } from "./interfaces"
import { ActionsStyled, CartItemStyled, SymmaryStyled } from "./styled"

export const CartItem = ({ id, name, description, price, amountItems }: CartItemProps) => {
    return (
        <CartItemStyled>
            <div>
                <h2 style={{ marginTop: '0' }}>{name}</h2>
                <SymmaryStyled>
                    <span>{price}</span>
                    <span >x{amountItems}</span>
                </SymmaryStyled>
            </div>
            <ActionsStyled>
                <Button name="-" />
                <Button name="+" />
            </ActionsStyled>
        </CartItemStyled>
    )
}