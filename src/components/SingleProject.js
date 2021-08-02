import React from 'react'
import './SingleProject.css'


const SingleProject = (props) => {


    return (

        <div className="singleproject"
            style={{
                background: `url('${props.project.image}')`
            }}>

            <h3 style={{ color: 'red' }}>{props.project.name}</h3>
            <p> {props.project.description}</p>
        </div>

    )
}

export default SingleProject
