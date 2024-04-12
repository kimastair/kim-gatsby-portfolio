import React from 'react'
import { MenuStateType } from 'types/app'
import './hamburger-button.scss'

interface Props {
  menuState: MenuStateType
  toggleMenu: () => void
}

// This component is used to display a hamburger button for mobile navigation
const HamburgerButton: React.FC<Props> = ({ menuState, toggleMenu }) => (
  <button
    className={`hamburger-button ${menuState}`}
    onClick={() => toggleMenu()}
    aria-label={
      menuState === 'open' ? 'open navigation menu' : 'close navigation menu'
    }
    aria-expanded={menuState === 'open'}
    aria-controls="mobile-menu"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
)

export default HamburgerButton
