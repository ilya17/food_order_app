import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allState } from "../../../core/store";
import { show } from "../../../core/store/actions/modalAction";
import { CartIcon } from "../CartIcon";
import { BadgeStyled, ButtonStyled, IconStyled } from "./styled";

export const CartButton = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: allState) => state.counter);

    return (
        <ButtonStyled onClick={() => dispatch(show())}>
            <IconStyled><CartIcon /></IconStyled>
            <span>Корзина</span>
            <BadgeStyled>{counter}</BadgeStyled>
        </ButtonStyled>
    )
}