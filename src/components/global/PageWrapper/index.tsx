import React, { StrictMode, useState } from 'react'
import { MenuStateType } from '@/types/app'
import './page-wrapper.scss'
import Header from './components/Header'
import Menu from './components/Menu'
import '@/styles/site.scss'

type Props = {
  children: React.ReactNode
}

// This component is used to wrap the entire page and manage the mobile navigation menu
const PageWrapper: React.FC<Props> = ({ children }) => {
  // set menu state for "open", "opening", "closing", "closed"
  const [menuState, setMenuState] = useState<MenuStateType>('closed')

  const toggleMenu = (closeMenuOnly = false): void => {
    if (menuState === 'closed' && !closeMenuOnly) {
      setMenuState('opening')
      setTimeout(() => {
        setMenuState('open')
      }, 100)
    } else {
      setMenuState('closing')
      setTimeout(() => {
        setMenuState('closed')
      }, 400)
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

export default PageWrapper
