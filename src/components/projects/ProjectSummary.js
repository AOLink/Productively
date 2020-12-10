import React from 'react'

// Functional Component
// Any Data we receive inside of this component, will come via props - "We Don't need state!"

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
                <div className="car-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p> Posted by Me</p>
                    <p className="grey-text">27 August, 2020</p>
                </div> 
        </div>
    )
}

export default ProjectSummary