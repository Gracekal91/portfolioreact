import './Project.css'
import SingleProject from '../components/SingleProject';
import Card from '../reusable/Card'



const Project = (props) => {
    const Projects = [
        {
            name: 'Project',
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            description: 'This is my project description',

        },
        {
            name: 'Project double',
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
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
            <h2 className="project__title"> My Recents Projects</h2>
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
