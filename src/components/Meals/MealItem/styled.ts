import styled from 'styled-components';

export const MealStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;

    & > h3 {
      margin: 0 0 0.25rem 0;
    }
`

export const MealInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const DescriptionStyled = styled.div`
    font-style: italic;
`

export const PriceStyled = styled.div`
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
`

