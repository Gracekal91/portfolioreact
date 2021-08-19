import React from 'react'


import './SingleProject.css'

const SingleProject = (props) => {


    return (


        <div className="singleproject"
            style={{
                background: `url('${props.project.image}')`,
                backgroundSize: 'cover'
            }}>

            {/* <h3>{props.project.name}</h3>
            <p> {props.project.description}</p> */}
        </div>


    )
}

export default SingleProject
