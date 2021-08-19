import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const getDate = () => {
    return new Date().getFullYear();
}
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <p>Life i'ts a matter of learning relevant skills everyday</p>
                <div className="social-media">
                    <Link to={{ pathname: 'https://github.com/Gracekal91' }} target="_blank">
                        <i className="fab fa-facebook-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>
                    <Link to={{ pathname: 'https://github.com/Gracekal91' }} target="_blank">
                        <i className="fab fa-github-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>
                    <Link to={{ pathname: 'https://www.linkedin.com/in/kalombo-grace/' }} target="_blank">
                        <i className="fab fa-twitter-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>

                </div>
            </div>
            <p className="copyright">Developed by Grace Kalombo - {getDate()}</p>
        </div>
    )
}

export default Footer
