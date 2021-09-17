import React from 'react'
import { Link } from 'react-router-dom'
import './calltoaction.css'
import Fade from 'react-reveal/Fade';

const CallToAction = () => {
    return (
        <div className="calltoaction">
            <div className="form">
                <h2>Let's start a project</h2>
            </div>
            <div>
                <p>Interested in working together? We should queue up a chat, Check previous works from the section above.</p>
            </div>
            <div>
                <Link exact to="/contact">
                    <Fade bottom>
                        <button type="button" className="btn">Let's Connect</button>
                    </Fade>
                </Link>
            </div>
        </div>
    )
}

export default CallToAction