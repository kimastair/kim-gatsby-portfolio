import * as React from "react"
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import experiences from "../../../data/work-history.json"
import "./experience-boxes.scss"

const ExperienceBoxes = ({ isHome = false }) => {

  let BoxLink, HeaderIcon, jobDescriptionKey, experienceData

  // configure component display differences between home and experience pages
  if (isHome) {
    BoxLink = () =>
      <Link className="box-link" to={`/experience`}>
        <span className="sr-only">View more details on my work experience page</span>
      </Link>
    HeaderIcon = () => <ArrowForwardIcon />
    jobDescriptionKey = "summary"
    experienceData = experiences.filter((job) => job.hasOwnProperty("summary"))
  } else {
    BoxLink = ({ company, urls }) =>
      <a className="box-link" href={urls.external} target="_blank" rel="noreferrer">
        <span className="sr-only">{`Go to ${company} site`}</span>
      </a>
    HeaderIcon = () => <ArrowOutwardIcon />
    jobDescriptionKey = "description"
    experienceData = experiences
  }
  return (
    <div>
      {experienceData.map((project, index) => (
        <article className="job" id={project.urls.anchor} key={`job-${index}`}>
          <BoxLink company={project.company} urls={project.urls} />
          <h3 className="header">
            <div className="company">{project.company}</div>
            <HeaderIcon />
          </h3>
          <span className="title">{project.title}</span>
          <div className="dates">{project.dates.start} - {project.dates.end}</div>
          <ul className="description">
            {project[jobDescriptionKey].map((bullet, index) => (
              <li key={`description-bullet-${project.urls.anchor}-${index}`}>{bullet}</li>
            ))}
          </ul>
          <div className="skills">
            {project.skills.map((skill, index) => (
              <div className="skill" key={`job-skill-${project.urls.anchor}-${index}`}>{skill}</div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

ExperienceBoxes.propTypes = {
  isHome: PropTypes.bool,
};

export default ExperienceBoxes
