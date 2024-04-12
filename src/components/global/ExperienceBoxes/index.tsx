import * as React from 'react'
import { Link } from 'gatsby'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import experiences from '@/data/work-history.json'
import './experience-boxes.scss'

interface Job {
  skills: string[]
  urls: { anchor: string; external: string }
  description: string[]
  summary: string[]
  dates: { start: string; end: string }
  company: string
  title: string
}

interface Config {
  BoxLink: (company: string, url: string) => React.ReactElement
  Header: (children: React.ReactNode) => React.ReactElement
  HeaderIcon: () => React.ReactElement
  jobDescriptionKey: 'description' | 'summary'
  experienceData: Job[]
}

interface Props {
  isHome?: boolean
}

// This component is used to display a list of work experiences in a consistent format
const ExperienceBoxes: React.FC<Props> = ({ isHome = false }) => {
  // config for appearance differences on home page
  const homeConfig: Config = {
    BoxLink: () => (
      <Link className="box-link" to={`/experience`}>
        <span className="sr-only">View more on work experience page</span>
      </Link>
    ),
    Header: (children: React.ReactNode) => (
      <h3 className="header">{children}</h3>
    ),
    HeaderIcon: () => <ArrowForwardIcon />,
    jobDescriptionKey: 'summary',
    experienceData: experiences.filter((job: Job) => job.summary.length > 0),
  }

  // config for appearance differences on non-home page
  const defaultConfig: Config = {
    BoxLink: (company: string, url: string) => (
      <a className="box-link" href={url} target="_blank" rel="noreferrer">
        <span className="sr-only">{`Go to ${company} site`}</span>
      </a>
    ),
    Header: (children: React.ReactNode) => (
      <h2 className="header">{children}</h2>
    ),
    HeaderIcon: () => <ArrowOutwardIcon />,
    jobDescriptionKey: 'description',
    experienceData: experiences,
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
            {project[config.jobDescriptionKey].map(
              (bullet: string, index: number) => (
                <li key={`description-bullet-${project.urls.anchor}-${index}`}>
                  {bullet}
                </li>
              )
            )}
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

export default ExperienceBoxes
