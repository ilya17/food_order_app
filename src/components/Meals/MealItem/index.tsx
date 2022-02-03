import React from "react";
import { useDispatch } from "react-redux";
import { incrementPrice } from "../../../core/store/actions/totalPriceAction";
import { MealItemForm } from "../MealItemForm";
import { MealItemProps } from "./interfaces";
import { DescriptionStyled, MealInfoStyled, MealStyled, PriceStyled } from "./styled";

export const MealItem = (item: MealItemProps) => {

    const dispatch = useDispatch();

    const costCalculationHandler = (amount: number) => {
        dispatch(incrementPrice(Number((item.price * amount).toFixed(2))));
    }

    return (
        <MealStyled>
            <MealInfoStyled>
                <h3>{item.name}</h3>
                <DescriptionStyled>{item.description}</DescriptionStyled>
                <PriceStyled>{item.price} ₽</PriceStyled>
            </MealInfoStyled>
            <MealItemForm item={item} id={item.id} onAddHandler={costCalculationHandler} />
        </MealStyled>
    )
}