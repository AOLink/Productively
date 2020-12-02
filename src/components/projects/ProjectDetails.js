import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(props)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Title - {id} </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, aliquam! Nisi, quam sed enim, rem, ipsum nostrum veritatis voluptatum omnis aliquid aliquam aut quas a atque labore repellendus et quibusdam?</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Me</div>
                    <div>27th August, 5am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
