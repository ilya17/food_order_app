import styled, { keyframes } from 'styled-components';

export const ButtonStyled = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: #2c0d00;
    transition: all 0.3s;
  }
`

export const IconStyled = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`

export const BadgeStyled = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`
export const BumpAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

export const BumpStyled = styled.div`
    animation: ${BumpAnimation} 0.3s ease-out;
`