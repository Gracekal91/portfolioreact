import React from 'react'
import { Link } from 'react-router-dom'

import './SingleProject.css'

const SingleProject = (props) => {


    return (

        <Link to="/works/:id">
            <div className="singleproject"
                style={{
                    background: `url('${props.project.image}')`
                }}>

                <h3>{props.project.name}</h3>
                <p> {props.project.description}</p>
            </div>
        </Link>

    )
}

export default SingleProject
