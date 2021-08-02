import './Myskills.css'
import SkillsCard from './SkillsCard'
import SkillsCard2 from './SkillsCard2'


const Myskill = () => {


    return (
        <div className="myskills__me">
            <h2 className="myskills__title">My Skills</h2>
            <div className="cards">
                <SkillsCard />
                <SkillsCard2 />
            </div>
        </div>
    )
}

export default Myskill
