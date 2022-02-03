import { FC } from "react"
import ReactDOM from "react-dom"
import { useDispatch } from "react-redux";
import { hide } from "../../../core/store/actions/modalAction";
import { BackDropStyled, ModalStyled } from "./styled"

const portalElement = document.getElementById('overlays')!;


export const BackDrops = () => {
    const dispatch = useDispatch();

    return <BackDropStyled onClick={() => dispatch(hide())} />
}

export const ModalOverlay: FC = ({ children }) => {
    return <ModalStyled>{children}</ModalStyled>
}

export const Modal: FC = ({ children }) => {
    return <>
        {ReactDOM.createPortal(<BackDrops />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
}