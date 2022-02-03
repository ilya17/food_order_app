import React, { ChangeEvent } from "react";
import { InputProps } from "./interfaces";
import { InputContainerStyled } from "./styled";

export const Input = ({
    htmlFor,
    label,
    id,
    type = 'text',
    pattern,
    value,
    defaultValue,
    onChange
}: InputProps) => {

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <>
            <InputContainerStyled>
                {label && <label htmlFor={htmlFor}>{label}</label>}
                <input
                    defaultValue={defaultValue}
                    id={id}
                    type={type}
                    pattern={pattern}
                    value={value}
                    onChange={inputHandler}
                />
            </InputContainerStyled>
        </>
    )
}