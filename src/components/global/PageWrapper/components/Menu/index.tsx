import React from 'react'
import { Link } from 'gatsby'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { MenuStateType } from '@/types/app'
import './menu.scss'
import Connect from '../Connect'

interface Props {
  menuState: MenuStateType
  toggleMenu: (state?: boolean) => void
}

// This component is used to display the mobile navigation menu
const Menu: React.FC<Props> = ({ menuState, toggleMenu }) => (
  <div
    id="mobile-menu"
    className={`menu ${menuState}`}
    aria-expanded={menuState === 'open' ? true : false}
  >
    <div className="menu-content">
      <nav className="nav-container">
        <div className="nav-flex-item">
          <Link to="/about" onClick={() => toggleMenu()}>
            <span>About</span>
            <ArrowForwardIcon fontSize="large" />
          </Link>
        </div>
        <div className="nav-flex-item">
          <Link to="/experience" onClick={() => toggleMenu()}>
            <span>Experience</span>
            <ArrowForwardIcon fontSize="large" />
          </Link>
        </div>
        <div className="nav-flex-item">
          <Link to="/contact" onClick={() => toggleMenu()}>
            <span>Contact</span>
            <ArrowForwardIcon fontSize="large" />
          </Link>
        </div>
      </nav>
      <Connect toggleMenu={toggleMenu} />
    </div>
  </div>
)

export default Menu
