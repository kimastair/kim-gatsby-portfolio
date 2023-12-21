import * as React from "react"
import "./about-page.scss"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return (
        <main className="about-page">
            <h1>About me</h1>
            <div className="flex-container">
                <div className="left">
                    <h2>At work</h2>
                    <p>
                        My passion for coding began as a hobbyist, creating web pages and writing Visual Basic for astronomy apps. When I was 20, I picked up some temp work doing data entry at a start-up (LTCFP). They kept me on for 3 years as an automation engineer, where I leveraged my VB skills to write VBA for all of their Microsoft Office processes, worked on the website, and provided IT support.</p>
                    <p>
                        I graduated into a Web Developer role at an agency (SMITH), where I stayed for 8 years. My experience there laid the foundation for how I work now and what I'm passionate about in my efforts toward a positive developer experience. I received outstanding mentorship, leaving me with a strong desire to offer the same to others. I experienced every flavor of unmaintainable code, giving me a passion for excellent documentation and writing consistent, quality, lean, and readable code that is a pleasure for engineers to work with.
                    </p>
                    <p>
                        Since then, I've been inspired by the positive impact I can make in inclusiveness through awareness and empathy at work. I strive to write fully accessible code for my site's users and ensure those I work with are treated with equal respect and positive regard. My favorite work environments are genuinely kind and supportive and include a balanced mix of gender, race, ability, and background.
                    </p>
                </div>
                <div className="right">
                    <h2>In my free time</h2>
                    <p>
                        I'm incredibly fortunate to live in what (I think) is the most beautiful place on earth. My relaxation comes through exploring the forests and beaches of northwestern Washington. I also enjoy making dinner with friends, playing pool, folk dancing, gardening, and jam sessions of all kinds.
                    </p>
                    <StaticImage className="img-me" src="../../images/me-forest.jpg" alt="Kim walking through the forest in winter" />
                </div>
            </div>
        </main>
    )
}

export default AboutPage
