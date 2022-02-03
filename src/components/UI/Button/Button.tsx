import React from "react";
import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button = ({
    name,
    type = 'button',
    disabled = false,
    onClick
}: ButtonProps) => {
    return <ButtonStyled type={type} disabled={disabled} onClick={onClick}>{name}</ButtonStyled>
}