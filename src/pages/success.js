import React, { useState, useEffect } from 'react'
import CustomHead from '../components/global/CustomHead'
import PageWrapper from '../components/global/PageWrapper'

// This component is used to display a success message after the contact form is submitted
const Success = () => {
  const [timeLeft, setTimeLeft] = useState(3)

  useEffect(() => {
    // redirect to home when timer = 0
    if (!timeLeft) window.location.replace('/')

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  return (
    <PageWrapper>
      <main>
        <h1>Thanks for reaching out!</h1>
        <h3>
          Back to the home page in{' '}
          <span
            role="timer"
            aria-label={`redirecting to home page in ${timeLeft} seconds`}
            aria-live="assertive"
          >
            {timeLeft}
          </span>
        </h3>
      </main>
    </PageWrapper>
  )
}

export default Success

export const Head = () => <CustomHead title="Thank you | Kim Stair" />
