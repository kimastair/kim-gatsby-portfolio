import React from "react"
import "./hamburger-button.scss"

const HamburgerButton = ({ menuState, openCloseMenu }) => (
    <button
        className={`hamburger-button ${menuState}`}
        title={menuState === 'open' ? 'open navigation menu' : 'close navigation menu'}
        onClick={() => openCloseMenu()}
        aria-expanded={menuState === 'open'}
        aria-controls="mobile-menu">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </button>
)


export default HamburgerButton