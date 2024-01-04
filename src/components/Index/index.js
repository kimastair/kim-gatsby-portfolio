import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import DownloadIcon from '@mui/icons-material/Download'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import "./index-page.scss"
import ExperienceBoxes from "../global/ExperienceBoxes"
import SkillBars from "./components/SkillBars"

const IndexPage = () => {
    return (
        <main className="index-page">
            <h1 className="sr-only">Kim Stair, Senior Frontend Engineer</h1>
            <section className="left">
                <div className="flex-container">
                    <h2 className="sr-only">Intro</h2>
                    <div className="welcome">
                        Hi, I'm Kim
                    </div>
                    <p className="intro">
                        A senior frontend engineer building accessible, performant, beautiful experiences for the web.
                    </p>
                    <div className="img-container">
                        <StaticImage
                            className="img-me"
                            objectFit="contain"
                            objectPosition="0% 50%"
                            src="../../images/cartoon-me.png"
                            alt="Kim Stair"
                            loading="eager" />
                    </div>
                    <div>
                        <a className="resume-link icon btn" href={`/documents/KimStairSrEngineerFE.docx?${Date.now()}`}><span>Resume</span><DownloadIcon /></a>
                    </div>
                </div>
            </section>
            <div className="right">
                <section className="skills-section">
                    <h2 className="header">Top Skills</h2>
                    <SkillBars />
                </section>
                <section className="experience-section">
                    <h2 className="header">Recent experience</h2>
                    <ExperienceBoxes isHome={true} />
                    <Link className="icon" to="/experience"><span>View all experience</span><ArrowForwardIcon /></Link>
                </section>
            </div>
        </main>
    )
}

export default IndexPage

