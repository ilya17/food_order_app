import styled, { keyframes } from 'styled-components';

export const BackDropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);

    @media (max-width: 768px) {
        width: 40rem;
        left: calc(50% - 20rem);
    }
`

export const ModalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ModalStyled = styled.div`
    position: fixed;
    top: 20vh;
    left: 24%;
    width: 50%;
    height: 50%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: ${ModalAnimation} 0.3s ease-out forwards;
`