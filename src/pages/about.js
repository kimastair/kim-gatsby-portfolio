import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import Page from "../components/About"
import "./../styles/site.scss"

const AboutPage = () => {
  return (
    <PageWrapper>
      <Page />
    </PageWrapper>
  )
}

export default AboutPage

export const Head = () => <CustomHead title="About | Kim Stair" />
