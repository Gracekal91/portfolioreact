import './AboutMe.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const AboutMe = () => {
    return (
        <div className="about__me">
            <Fade left>
                <h2 className="aboutme__title">About Me</h2>
            </Fade>
            <Bounce cascade>
                <p className="aboutme__description">I'm a Goal-oriented Web Developer that brings strong commitment to collaboration and solutions-oriented problem-solving. I used various web design packages to develop custom-crafted, customer-focused websites and designs. Committed to high standards of user experience, usability and speed over more than 3 years for multiple users. Lends detailed knowledge of SEO to increase visibility.</p>
            </Bounce>
            <Link to="/contact">
                <Bounce>
                    <button className="aboutme__btn">GET IN TOUCH</button>
                </Bounce>
            </Link>

        </div>
    )
}

export default AboutMe



