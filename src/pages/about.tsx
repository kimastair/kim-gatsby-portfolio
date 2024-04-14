import * as React from 'react'
import CustomHead from '@/components/global/CustomHead'
import PageWrapper from '@/components/global/PageWrapper'
import AboutPage from '@/components/AboutPage'

// This component is used to wrap the about page
const AboutPageWrapper = (): JSX.Element => (
  <PageWrapper>
    <AboutPage />
  </PageWrapper>
)

export default AboutPageWrapper

export const Head = (): JSX.Element => <CustomHead title="About | Kim Stair" />
