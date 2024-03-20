import * as React from 'react'
import CustomHead from '../components/global/CustomHead'
import PageWrapper from '../components/global/PageWrapper'
import AboutPage from '../components/AboutPage'
import './../styles/site.scss'

// This component is used to wrap the about page
const AboutPageWrapper = () => {
  return (
    <PageWrapper>
      <AboutPage />
    </PageWrapper>
  )
}

export default AboutPageWrapper

export const Head = () => <CustomHead title="About | Kim Stair" />
