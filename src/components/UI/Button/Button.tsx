import React, { FC } from "react";
import { ButtonProps } from "./interfaces";
import { ButtonStyled } from "./styled";

export const Button: FC<ButtonProps> = React.memo(({
    children,
    name,
    type = 'button',
    disabled = false,
    onClick
}) => {
    return (
        <ButtonStyled type={type} disabled={disabled} onClick={onClick}>
            {name}
            {children}
        </ButtonStyled>
    )
})