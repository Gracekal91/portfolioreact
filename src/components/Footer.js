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
                    <Link>
                        <i class="fab fa-facebook-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>
                    <Link>
                        <i class="fab fa-github-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>
                    <Link>
                        <i class="fab fa-twitter-square icons" style={{ color: 'white' }} aria-hidden="true"></i>
                    </Link>

                </div>
            </div>
            <p className="copyright">Developed by Grace Kalombo - {getDate()}</p>
        </div>
    )
}

export default Footer
