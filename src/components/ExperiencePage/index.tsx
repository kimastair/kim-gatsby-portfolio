import * as React from 'react'
import './experience-page.scss'
import ExperienceBoxes from '../global/ExperienceBoxes'

// This component is used to display information about my work experience
const ExperiencePage = (): JSX.Element => (
  <main className="experience-page">
    <h1>Work experience</h1>
    <div className="flex-container">
      <div className="left">
        <ExperienceBoxes />
      </div>
      <div className="right"></div>
    </div>
  </main>
)

export default ExperiencePage
