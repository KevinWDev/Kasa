// Assets
import Logo from '../../assets/LOGO.png'
// Link
import { Link } from 'react-router-dom'
// Styles
import '../../utils/styles/Header.css'


function Header() {
  return (
    <div className='divHeaderContainer'>
      <div>
        <Link to="/">
          <img className='logoHeader' src={Logo} alt="" />
        </Link>
      </div>
      <div className='divLink'>
        <Link className='styledLink' to="/">Accueil</Link>
        <Link className='styledLink' to="/propos">À Propos</Link>
      </div>
    </div>
  )
}

export default Header
