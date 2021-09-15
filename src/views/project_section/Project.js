import './Project.css'
import SingleProject from '../../components/project_section/SingleProject';
import Card from '../../reusable/Card'
import Bounce from 'react-reveal/Bounce';
import eyespeed from '../../images/eyespeedtech.png'
import samipay from '../../images/samipay.png'



const Project = (props) => {
    const Projects = [
        {
            name: 'Project',
            image: eyespeed,
            description: 'This is my project description',

        },
        {
            name: 'Project double',
            image: samipay,
            description: 'This is my second project description'
        },
        {

            name: 'Project double',
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            description: 'This is my second project description'
        }
    ]

    return (

        <div className="project">
            <Bounce cascade>
                <h2 className="project__title" style={{ marginTop: '3rem' }}> My Recents Projects</h2>
            </Bounce>
            <div className="projects__container">
                {
                    Projects.map((project) => {
                        return <Card>
                            <SingleProject project={project} />
                        </Card>
                    })
                }
            </div>
        </div>
    )

}
export default Project

