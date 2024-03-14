import React, { StrictMode, useState } from "react"
import PropTypes from 'prop-types';
import "./page-wrapper.scss"
import Header from "./components/Header"
import Menu from "./components/Menu"

const PageWrapper = ({ children }) => {

  // set menu state for "open", "opening", "closing", "closed"
  // to support both CSS opacity transitionas and a11y non-focus on hidden page elements
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

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper
