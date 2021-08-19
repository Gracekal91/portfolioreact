import './Myskills.css'
import SkillsCard from './SkillsCard'
import SkillsCard2 from './SkillsCard2'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const Myskill = () => {
    return (
        <div className="myskills__me">
            <Fade right>
                <h2 className="myskills__title">My Skills</h2>
            </Fade>
            <div className="cards">
                <SkillsCard />
                <SkillsCard2 />
            </div>
        </div>
    )
}

export default Myskill
