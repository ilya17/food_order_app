import styled from 'styled-components';

export const ButtonStyled = styled.button`
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
    transition: all, 0.3s;

    & :hover,
    & :active {
        background-color: #641e03;
        border-color: #641e03;
        transition: all, 0.3s;
    }
`;