import * as React from 'react'
import { Link } from 'gatsby'
import PageWrapper from '@/components/global/PageWrapper'
import CustomHead from '@/components/global/CustomHead'

// This component is used to display a 404 page when a user navigates to a non-existent page
const NotFoundPage = (): JSX.Element => (
  <PageWrapper>
    <main className="indexMain">
      <section className="left">
        <div className="top">
          <div className="welcome">Oops</div>
          <p className="intro">
            You've got a bad URL in there. This page doesn't exist :(
          </p>
          <Link to="/">Head home</Link>
        </div>
      </section>
    </main>
  </PageWrapper>
)

export default NotFoundPage

export const Head = (): JSX.Element => <CustomHead title="Not found" />
