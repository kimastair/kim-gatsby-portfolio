import React, { StrictMode, useState } from "react"
import "./page-wrapper.scss"
import Header from "./components/Header"
import Menu from "./components/Menu"

export default function PageWrapper({ children }) {

  // set menu state for "open", "opening", "closing", "closed" - to support both CSS transitionas and a11y non-focus
  const [menuState, setMenuState] = useState('closed');

  const toggleMenu = (closeMenuOnly) => {
    if (menuState === 'closed' && !closeMenuOnly) {
      setMenuState('opening')
      setTimeout(() => {
        setMenuState('open')
      }, 100);
    } else {
      setMenuState('closing')
      setTimeout(() => {
        setMenuState('closed')
      }, 400);
    }
  }

  return (
    <StrictMode>
      <div className={`page-wrapper menu-${menuState}`}>
        <Header menuState={menuState} toggleMenu={toggleMenu} />
        <Menu menuState={menuState} toggleMenu={toggleMenu} />
        {children}
      </div>
    </StrictMode>
  )
}