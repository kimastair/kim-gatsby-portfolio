import React from 'react'
import { Link } from 'gatsby'
import { MenuStateType } from 'types/app'
import logo from '@/images/logo-kim-stair.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Connect from '../Connect'
import './header.scss'
import HamburgerButton from '../HamburgerButton'

interface Props {
  menuState: MenuStateType
  toggleMenu: (state?: boolean) => void
}

// This component is used to display the header of the site
const Header: React.FC<Props> = ({ menuState, toggleMenu }) => (
  <header className={menuState === 'open' ? 'menu-open' : ''}>
    <div className="header-content">
      <Link className="logo-link" to="/" onClick={() => toggleMenu(true)}>
        <img
          className="logo"
          src={logo}
          alt="logo for kim stair - web developer"
        />
        <span className="sr-only">Home</span>
      </Link>
      <nav className="nav-container">
        <div className="nav-flex-item">
          <Link className="icon" to="/about">
            <span>About</span>
            <ArrowForwardIcon fontSize="medium" />
          </Link>
        </div>
        <div className="nav-flex-item">
          <Link className="icon" to="/experience">
            <span>Experience</span>
            <ArrowForwardIcon fontSize="medium" />
          </Link>
        </div>
        <div className="nav-flex-item">
          <Link className="icon" to="/contact">
            <span>Contact</span>
            <ArrowForwardIcon fontSize="medium" />
          </Link>
        </div>
      </nav>
      <Connect toggleMenu={toggleMenu} />
      <HamburgerButton menuState={menuState} toggleMenu={toggleMenu} />
    </div>
    <div className="scroll-fade-block"></div>
  </header>
)

export default Header
