import React, { FC } from "react";
import { CardContainerStyled } from "./styled";

export const Card: FC = ({ children }) => {
    return <CardContainerStyled> {children} </CardContainerStyled>

}