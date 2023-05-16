// Assets
import Logo from '../../assets/LOGO.png'
// Link
import { Link } from 'react-router-dom'
// Styles
import { StyledLink, DivHeaderContainer, LogoHeader } from '../../utils/styles/Header'

function Header() {
  return (
    <DivHeaderContainer>
      <div>
        <Link to="/">
          <LogoHeader src={Logo} alt="" />
        </Link>
      </div>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/propos">À Propos</StyledLink>
      </div>
    </DivHeaderContainer>
  )
}

export default Header
