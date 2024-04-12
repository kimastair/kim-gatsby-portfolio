import * as React from 'react'
import CustomHead from '@/components/global/CustomHead'
import PageWrapper from '@/components/global/PageWrapper'
import IndexPage from '@/components/IndexPage'

// This component is used to wrap the index page
const IndexPageWrapper = (): JSX.Element => (
  <PageWrapper>
    <IndexPage />
  </PageWrapper>
)

export default IndexPageWrapper

export const Head = (): JSX.Element => (
  <CustomHead title="Kim Stair - FE Engineer" />
)
