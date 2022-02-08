import React, { useMemo } from "react"
import { Card } from "../../UI/Card/Card"
import { MealItem } from "../MealItem"
import { DUMMY_MEALS } from "./constants"
import { MealContainerStyled, MealsStyled } from "./styled"

export const AvailabelMeals = React.memo(() => {
    const memoList = useMemo(() => {
        return DUMMY_MEALS.map(({ name, description, price, id, amountItems }) =>
            <MealContainerStyled key={id}>
                <Card>
                    <MealItem amountItems={amountItems} id={id} name={name} description={description} price={price} />
                </Card>
            </MealContainerStyled>
        )
    }, [])


    return (
        <MealsStyled>
            {memoList}
        </MealsStyled>
    )
})