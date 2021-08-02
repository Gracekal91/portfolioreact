import React from 'react'
import { Link } from 'react-router-dom'
import './calltoaction.css'

const CallToAction = () => {
    return (
        <div className="calltoaction">
            <div className="form">
                <h2>Let's start a project</h2>
            </div>
            <div>
                <p>Interested in working together? We should queue up a chat. Do no not hesitate</p>
            </div>
            <div>
                <Link to="">
                    <button type="button" className="btn">Let's Connect</button>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction