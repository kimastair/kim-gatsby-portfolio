import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import Page from "../components/Index"

const IndexPage = () => {
  return (
    <PageWrapper>
      <Page />
    </PageWrapper >
  )
}

export default IndexPage

export const Head = () => <CustomHead title="Kim Stair - FE Engineer" />
