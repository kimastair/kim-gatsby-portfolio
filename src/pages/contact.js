import * as React from "react"
import CustomHead from "../components/global/CustomHead"
import PageWrapper from "../components/global/PageWrapper"
import Page from "../components/Contact"

const contact = () => {
  return (
    <PageWrapper>
      <Page />
    </PageWrapper >
  )
}

export default contact

export const Head = () => <CustomHead title="Contact | Kim Stair" />
