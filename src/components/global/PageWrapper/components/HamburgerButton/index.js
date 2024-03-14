import React from 'react'
import PropTypes from 'prop-types'
import './hamburger-button.scss'

const HamburgerButton = ({ menuState, toggleMenu }) => (
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

HamburgerButton.propTypes = {
  menuState: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
}

export default HamburgerButton
