import styled from 'styled-components';

export const CartItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #8a2b06;
  padding: 1rem 0;

  & > h2 {
    margin: 0 0 0.5rem 0;
    color: #363636;
  }
`

export const SymmaryStyled = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space - between;
    align-items: center;

    & > span:first-child {
        font-weight: bold;
        margin-right: 10px;
        color: #8a2b06;
    }

    & > span:last-child {
        font-weight: bold;
        border: 1px solid #ccc;
        padding: 0.25rem 0.75rem;
        border-radius: 6px;
        color: #363636;
    }
`

export const ActionsStyled = styled.div`
    display: flex;

    & > button:first-child {
      margin-right: 10px;
    }
`