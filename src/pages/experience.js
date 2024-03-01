import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import ExperiencePage from "../components/ExperiencePage"
import "./../styles/site.scss"

const ExperiencePageWrapper = () => {
  return (
    <PageWrapper>
      <ExperiencePage />
    </PageWrapper>
  )
}

export default ExperiencePageWrapper

export const Head = () => <CustomHead title="Experience | Kim Stair" />
