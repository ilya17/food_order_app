import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState } from "../../../core/store";
import { show } from "../../../core/store/actions/modalAction";
import { Button } from "../../UI/Button/Button";
import { CartIcon } from "../CartIcon";
import { BadgeStyled, ButtonStyled, IconStyled } from "./styled";

export const CartButton = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: allState) => state.counter);

    return (
        <ButtonStyled>
            <Button name="Корзина" disabled={counter < 1} onClick={() => dispatch(show())}>
                <BadgeStyled>{counter}</BadgeStyled>
                <IconStyled><CartIcon /></IconStyled>
            </Button>
        </ButtonStyled>
    )
}