import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import IndexPage from "../components/IndexPage"

const IndexPageWrapper = () => {
  return (
    <PageWrapper>
      <IndexPage />
    </PageWrapper >
  )
}

export default IndexPageWrapper

export const Head = () => <CustomHead title="Kim Stair - FE Engineer" />
