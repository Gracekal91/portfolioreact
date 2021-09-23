import React from 'react'
import './SingleProject.css'

const SingleProject = (props) => {
    const { image } = props.project
    return (

        <div className="singleproject"
            style={{
                background: `url('${image}')`,
                backgroundSize: 'cover'
            }}
        >
        </div>

    )
}

export default SingleProject
