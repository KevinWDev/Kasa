import Logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import headerModule from '../../styles/Header.module.css'
import { StyledLink } from '../../styles/Atoms'

function Header() {
  return (
    <div className={headerModule.divHeaderContainer}>
      <div>
        <Link to="/">
          <img src={Logo} className={headerModule.logoHeader} alt="" />
        </Link>
      </div>
      <div className={headerModule.navHeader}>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/propos">À Propos</StyledLink>
      </div>
    </div>
  )
}

export default Header
