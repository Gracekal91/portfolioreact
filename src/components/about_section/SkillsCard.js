import './SkillsCard.css'

const SkillsCard = () => {
    return (
        <div className="skillscard">
            <ul>
                <li>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3"></i>
                </li>
                <li>
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-react"></i>
                </li>
                <li>
                    <i className="fab fa-node"></i>
                    <i className="fab fa-php"></i>
                </li>
            </ul>
        </div>
    )
}

export default SkillsCard
