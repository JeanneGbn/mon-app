import Logo from '../img/argentBankLogo.png';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="main-nav"> 
            <a className='main-nav-logo'>
              <img 
              src={Logo} 
              className="main-nav-logo-image"
              alt='Logo ArgentBank'/>
            </a>
            <Link to="/connection" className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
        </nav>
    )
}

export default Header;