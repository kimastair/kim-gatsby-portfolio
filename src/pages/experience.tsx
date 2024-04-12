import * as React from 'react'
import CustomHead from '@/components/global/CustomHead'
import PageWrapper from '@/components/global/PageWrapper'
import ExperiencePage from '@/components/ExperiencePage'

// This component is used to wrap the experience page
const ExperiencePageWrapper = (): JSX.Element => (
  <PageWrapper>
    <ExperiencePage />
  </PageWrapper>
)

export default ExperiencePageWrapper

export const Head = (): JSX.Element => (
  <CustomHead title="Experience | Kim Stair" />
)
