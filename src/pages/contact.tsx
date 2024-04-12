import * as React from 'react'
import CustomHead from '@/components/global/CustomHead'
import PageWrapper from '@/components/global/PageWrapper'
import ContactPage from '@/components/ContactPage'

// This component is used to wrap the contact page
const ContactPageWrapper = (): JSX.Element => (
  <PageWrapper>
    <ContactPage />
  </PageWrapper>
)

export default ContactPageWrapper

export const Head = (): JSX.Element => (
  <CustomHead title="Contact | Kim Stair" />
)
