// Assets
import Logo from '../../assets/LOGO.png'
// Link
import { Link } from 'react-router-dom'
// Styles
import '../../utils/styles/Header.css'


function Header() {
  return (
    <header className='divHeaderContainer'>
      <div>
          <img className='logoHeader' src={Logo} alt="" />   
      </div>
      <div className='divLink'>
        <Link className='styledLink' to="/">Accueil</Link>
        <Link className='styledLink' to="/propos">À Propos</Link>
      </div>
    </header>
  )
}

export default Header
