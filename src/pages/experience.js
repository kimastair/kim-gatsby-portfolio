import * as React from 'react'
import CustomHead from '../components/global/CustomHead'
import PageWrapper from '../components/global/PageWrapper'
import ExperiencePage from '../components/ExperiencePage'
import './../styles/site.scss'

// This component is used to wrap the experience page
const ExperiencePageWrapper = () => {
  return (
    <PageWrapper>
      <ExperiencePage />
    </PageWrapper>
  )
}

export default ExperiencePageWrapper

export const Head = () => <CustomHead title="Experience | Kim Stair" />
