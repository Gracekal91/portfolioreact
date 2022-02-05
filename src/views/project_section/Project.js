import './Project.css'
import SingleProject from '../../components/project_section/SingleProject';
import { Link } from 'react-router-dom';
import Card from '../../reusable/Card'
import eyespeed from '../../images/eyespeedtech.png'
import samipay from '../../images/samipay.png'
import Bounce from 'react-reveal/Bounce';

const PROJECTS = [
    {
        id: 1,
        image: eyespeed,
        title: 'EYE SPEED TECHNOLOGY ',
        tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP hellooooo',
        link: "https://eyespeedtech.co.za",
        description: 'Hello this is the description'

    },
    {
        id: 2,
        image: samipay,
        title: 'SAMIPAY TECHNOLOGY',
        tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
        link: "https://eyespeedtech.co.za",
        description: 'Hello this is the description'
    },
    {
        id: 3,
        image: eyespeed,
        title: 'CMS',
        tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
        link: "https://eyespeedtech.co.za",
        description: 'Hello this is the description'
    }
]

const Project = () => {
    return (

        <div className="project">
            <Bounce cascade>
                <h2 className="project__title" style={{ marginTop: '3rem' }}> My Recents Projects</h2>
            </Bounce>
            <div className="projects__container">
                {
                    PROJECTS.map((project) => {
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

