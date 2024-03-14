import React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import "./connect.scss"


const Connect = ({ toggleMenu }) => {
    return (
        <div className="connect">
            <a href="https://www.linkedin.com/in/kim-stair/" target="_blank" rel="noreferrer" onClick={() => toggleMenu(true)}><span className="sr-only">LinkedIn</span><LinkedInIcon fontSize="medium" /></a>
            <a href="https://github.com/kimastair" target="_blank" rel="noreferrer" onClick={() => toggleMenu(true)}><span className="sr-only">GitHub</span><GitHubIcon fontSize="medium" /></a>
            <Link to="/contact" onClick={() => toggleMenu(true)}><span className="sr-only">E-mail me</span><MailOutlineIcon fontSize="medium" /></Link>
        </div>
    )
}

Connect.propTypes = {
    toggleMenu: PropTypes.func,
};

export default Connect
