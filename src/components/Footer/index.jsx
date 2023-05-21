// Assets
import LogoWhite from '../../assets/LogoWhite.png';
// Styles
import '../../utils/styles/Footer.css';

function Footer() {
  return (
    <div className="container-footer-main">
      <div className="container-footer">
        <div>
          <img className="img-logo-footer" src={LogoWhite} alt="" />
          <p className="no-copy">© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;