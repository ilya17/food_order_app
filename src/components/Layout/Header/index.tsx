// import mealsImage from './Assets/meals.jpeg'
import { CartButton } from '../CartButton'
import { HeaderStyled, MainImageStyled } from './styled'

export const Header = () => {
    const mealsImage = require('./Assets/meals.jpeg')

    return <>
        <HeaderStyled>
            <h1>Доставка еды</h1>
            <CartButton />
        </HeaderStyled>
        <MainImageStyled>
            <img src={mealsImage} alt="еда" />
        </MainImageStyled>
    </>
}