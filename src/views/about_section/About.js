import './About.css'
import AboutMe from '../../components/about_section/AboutMe'
import Myskill from '../../components/about_section/Myskill'


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
