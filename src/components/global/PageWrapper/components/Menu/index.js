import React from "react"
import { Link } from "gatsby"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import "./menu.scss"
import Connect from "../../../PageWrapper/components/Connect"


const Menu = ({ menuState, openCloseMenu }) => {
    return (
        <>
            <div
                id="mobile-menu"
                className={`menu ${menuState}`}
                aria-expanded={menuState === 'open' ? true : false}>
                <div className="menu-content">
                    <nav className="nav-container">
                        <div className="nav-flex-item"><Link to="/about" onClick={() => openCloseMenu()}><span>About</span><ArrowForwardIcon fontSize="large" /></Link></div>
                        <div className="nav-flex-item"><Link to="/experience" onClick={() => openCloseMenu()}><span>Experience</span><ArrowForwardIcon fontSize="large" /></Link></div>
                        <div className="nav-flex-item"><Link to="/contact" onClick={() => openCloseMenu()}><span>Contact</span><ArrowForwardIcon fontSize="large" /></Link></div>
                    </nav>
                    <Connect menuState={menuState} openCloseMenu={openCloseMenu} />
                </div>
            </div>
        </>
    )
}


export default Menu