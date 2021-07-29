import './About.css'
import AboutMe from '../components/AboutMe'
import Myskill from '../components/Myskill'

const About = () => {
    return (
        <div className="about">
            <div className="about__me">
                <AboutMe />
            </div>
            <div className="myskills">
                <Myskill />
            </div>
        </div>
    )
}

export default About
