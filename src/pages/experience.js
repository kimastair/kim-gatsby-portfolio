import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import Page from "../components/Experience"
import "./../styles/site.scss"

const ExperiencePage = () => {
  return (
    <PageWrapper>
      <Page />
    </PageWrapper>
  )
}

export default ExperiencePage

export const Head = () => <CustomHead title="Experience | Kim Stair" />
