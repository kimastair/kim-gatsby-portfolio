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
                    <p>My enthusiasm for coding began as a hobbyist, creating web pages and writing Visual Basic for astronomy apps. When I was 20, I picked up some temp work doing data entry at an insurance start-up, where my hobbyist skills found a perfect home. I helped out as a VBA automation engineer for tedious Microsoft Office tasks, worked on the website, and provided IT support for three years.</p>
                    <p>I graduated into a Web Developer role at a digital agency, where I stayed for eight years. My experience there laid the foundation for how I work now and what I focus on in my efforts toward a positive developer experience. The outstanding mentorship I received there left me with a strong desire to offer the same to others. I've experienced every flavor of unmaintainable code, giving me a passion for excellent documentation and writing consistent, quality, lean, and readable code that is a pleasure for engineers to dig into.</p>
                    <p>Since then, I've been inspired by the positive impact I can make through awareness and empathy at work. I strive to write fully accessible code for my site's users. I am mindful that I treat my co-workers and clients with equal friendliness, respect, and positive regard. My favorite work environments are genuinely kind and supportive and include a balanced mix of gender, race, ability, and background.</p>
                </div>
                <div className="right">
                    <h2>In my free time</h2>
                    <p>I'm incredibly fortunate to live in what I have found to be the most beautiful place on earth. My relaxation comes through exploring the forests and beaches of northwestern Washington. I also enjoy making dinner with friends, being "queen of the hill" at my local pool table, painting, folk dancing, gardening, and jam sessions of all kinds. My volunteer efforts in the community focus on issues of at-risk youth and trauma recovery, supporting indigenous cultural restoration, clean environment, and ending homelessness.</p>
                    <StaticImage className="img-me" src="../../images/me-forest.jpg" alt="Kim walking through the forest in winter" loading="eager" placeholder="none" />
                </div>
            </div>
        </main>
    )
}

export default AboutPage
