import './Project.css'
import SingleProject from '../../components/project_section/SingleProject';
import { Link } from 'react-router-dom';
import Card from '../../reusable/Card'
import Bounce from 'react-reveal/Bounce';

const Project = ({ PROJECTS }) => {
    const recentProjects = PROJECTS.slice(0, 3);
    return (

        <div className="project">
            <Bounce cascade>
                <h2 className="project__title" style={{ marginTop: '3rem' }}> My Recents Projects</h2>
            </Bounce>
            <div className="projects__container">
                {
                    recentProjects.map((project) => {
                        return <Card key={project.id}>
                            <SingleProject project={project} />
                        </Card>
                    })
                }
            </div>
            <Link to="/portfolio">
                <button className="project__btn">
                    More Projects
                </button>
            </Link>
        </div>
    )
}
export default Project

