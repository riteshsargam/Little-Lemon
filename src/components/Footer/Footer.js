import './Footer.css';
import footerLogo from '../../assets/footer-logo.png';
import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer>
        <menu>
          <li className="img-footer">
            <img
              src={footerLogo}
              alt="Little Lemon logo"
            ></img>
          </li>
          <li className="contact">
            <h1 className="footer-header">Navigation</h1>
            <ul className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/menu">Menu</Link>
              
              <Link to="/reservations">Reservations</Link>
              <Link to="/order">Order Online</Link>
              <Link to="/login">Login</Link>
            </ul>
          </li>
  
          <li>
            <h1 className="footer-header">Contact</h1>
            <ul className="footer-links">
              <li>2395 Maldove Way,</li>
              <li>Chicago Illinois</li>
              <br></br>
              <li>(629)-243-6827</li>
              <br></br>
              <a
                href="mailto: info@example.com"
                target="_blank"
                rel="noreferrer"
              >
                info@example.com
              </a>
            </ul>
          </li>
          <li>
            <h1 className="footer-header">Connect</h1>
            <ul className="footer-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Watch our Videos!
              </a>
            </ul>
          </li>
        </menu>
        <div className="copyright">
                <p>&copy;Copyright Little Lemon</p>
            </div>
      </footer>

    );
};

export default Footer;