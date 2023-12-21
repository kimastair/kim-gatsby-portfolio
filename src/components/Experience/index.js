import * as React from "react"
import "./experience-page.scss"
import ExperienceBoxes from "../global/ExperienceBoxes"

const ExperiencePage = () => {
    return (
        <main className="experience-page">
            <h1>Work experience</h1>
            <div className="flex-container">
                <div className="left">
                    <ExperienceBoxes />
                </div>
                <div className="right">

                </div>
            </div>
        </main>
    )
}

export default ExperiencePage
