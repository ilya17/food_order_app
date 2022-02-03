import styled, { keyframes } from 'styled-components';

export const MealsAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
  
    to {
      opacity: 1;
      transform: translateY(0);
    }
`

export const MealsStyled = styled.div`
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    animation: ${MealsAnimation} 0.5s ease-out forwards;
`

export const MealContainerStyled = styled.div`
    margin-bottom: 20px;
`