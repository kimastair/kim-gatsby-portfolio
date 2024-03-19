import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import experiences from '../../../data/work-history.json'
import './experience-boxes.scss'

// This component is used to display a list of work experiences in a consistent format
const ExperienceBoxes = ({ isHome = false }) => {
  // config for appearance differences on home page
  const homeConfig = {
    BoxLink: () => (
      <Link className="box-link" to={`/experience`}>
        <span className="sr-only">View more on work experience page</span>
      </Link>
    ),
    Header: (children) => <h3 className="header">{children}</h3>,
    HeaderIcon: () => <ArrowForwardIcon />,
    jobDescriptionKey: 'summary',
    experienceData: experiences.filter((job) => job.hasOwnProperty('summary')),
  }

  // config for appearance differences on non-home page
  const defaultConfig = {
    BoxLink: (company, url) => (
      <a className="box-link" href={url} target="_blank" rel="noreferrer">
        <span className="sr-only">{`Go to ${company} site`}</span>
      </a>
    ),
    Header: (children) => <h2 className="header">{children}</h2>,
    HeaderIcon: () => <ArrowOutwardIcon />,
    jobDescriptionKey: 'description',
    experienceData: experiences,
  }

  defaultConfig.BoxLink.propTypes = {
    company: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  const config = isHome ? homeConfig : defaultConfig

  return (
    <div>
      {config.experienceData.map((project, index) => (
        <article className="job" id={project.urls.anchor} key={`job-${index}`}>
          {config.BoxLink(project.company, project.urls.external)}
          {config.Header(
            <>
              <div className="company">{project.company}</div>
              {config.HeaderIcon()}
            </>
          )}
          <span className="title">{project.title}</span>
          <div className="dates">
            {project.dates.start} - {project.dates.end}
          </div>
          <ul className="description">
            {project[config.jobDescriptionKey].map((bullet, index) => (
              <li key={`description-bullet-${project.urls.anchor}-${index}`}>
                {bullet}
              </li>
            ))}
          </ul>
          <div className="skills">
            {project.skills.map((skill, index) => (
              <div
                className="skill"
                key={`job-skill-${project.urls.anchor}-${index}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

ExperienceBoxes.propTypes = {
  isHome: PropTypes.bool,
}

export default ExperienceBoxes
