import React from 'react'
import { Link } from 'gatsby'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import './connect.scss'

interface Props {
  toggleMenu: (state: boolean) => void
}

// This component is used to display links to my social media profiles and contact form
const Connect: React.FC<Props> = ({ toggleMenu }) => (
  <div className="connect">
    <a
      href="https://www.linkedin.com/in/kim-stair/"
      target="_blank"
      rel="noreferrer"
      onClick={() => toggleMenu(true)}
    >
      <span className="sr-only">LinkedIn</span>
      <LinkedInIcon fontSize="medium" />
    </a>
    <a
      href="https://github.com/kimastair"
      target="_blank"
      rel="noreferrer"
      onClick={() => toggleMenu(true)}
    >
      <span className="sr-only">GitHub</span>
      <GitHubIcon fontSize="medium" />
    </a>
    <Link to="/contact" onClick={() => toggleMenu(true)}>
      <span className="sr-only">E-mail me</span>
      <MailOutlineIcon fontSize="medium" />
    </Link>
  </div>
)

export default Connect
