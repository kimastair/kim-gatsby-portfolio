import React from 'react'
import skills from '../../../../data/skills.json'
import './skill-bars.scss'

// This component is used to display a list of skills and years of experience in a consistent format
const SkillBars = () => {
  const sortedSkills = skills.sort((a, b) => {
    return b.years - a.years
  })
  const maxYearExperience = sortedSkills[0].years
  // const minYearExperience = sortedSkills[sortedSkills.length - 1].years
  return (
    <ul className="skill-bars">
      {sortedSkills.map((skill, index) => {
        const barStyle = {
          width: `${(skill.years / maxYearExperience) * 100}%`,
        }
        // const barLength = maxYearExperience / skill.year * 100
        return (
          <li className="skill" key={`skill-${index}`}>
            <span className="name">{skill.name}</span>
            <div className="bar-container">
              <div className="bar" style={barStyle}>
                <span className="years">{skill.years}</span>
              </div>
            </div>
          </li>
        )
      })}
      <li className="footer">
        <span className="spacer"></span>
        <div className="text-container">
          <span>* years of work experience</span>
        </div>
      </li>
    </ul>
  )
}

export default SkillBars
