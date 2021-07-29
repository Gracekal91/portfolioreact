import './Myskills.css'
import SkillsCard from './SkillsCard'


const Myskill = () => {
    return (
        <div className="myskills__me">
            <h2 className="myskills__title">My Skills</h2>
            <div className="cards">
                <SkillsCard />
                <SkillsCard />
            </div>
        </div>
    )
}

export default Myskill
