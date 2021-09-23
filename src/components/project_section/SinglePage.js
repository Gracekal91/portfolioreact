import React, { Fragment } from 'react'
import './SinglePage.css'

const SinglePage = (props) => {
    const { image, name } = props.location.state.project
    return (
        <Fragment>
            <header className="singleHeader">
                <h1 className="headerTitle">{name}</h1>
            </header>
            <div className="singleImage">
                <img src={image} alt="project ..." />
            </div>
            <div className="projectDescription">
                <div className="projectDescLeft">
                    <h1 style={{ color: 'orange' }}>About The Project</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente impedit illum quos exercitationem, quaerat ratione magnam beatae debitis fuga suscipit quia labore perspiciatis eveniet rem blanditiis praesentium quasi! Architecto, cumque?
                    Saepe ea nobis iure et totam quae quas voluptatum deserunt error accusamus, est, debitis iste maxime magni esse perferendis quibusdam animi nam quia neque voluptatibus, voluptates fugiat. Fuga, ea expedita?
                    Non saepe omnis optio, dolores aspernatur ro expedita praesentium unde minus fuga, ad alias cupiditate quibusdam dolores, inventore, nulla dignissimos dicta amet debitis nihil quas quidem eius. Cupiditate, at beatae!
                </div>
                <div className="projectDescRight">
                    <h1>Development</h1>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente impedit illum quos exercitationem, quaerat ratione magnam beatae debitis fuga suscipit quia labore perspiciatis eveniet rem blanditiis praesentium quasi! Architecto, cumque?
                    Saepe ea nobis iure et totam quae quas voluptatum deserunt error accusamus, est, debitis iste maxime magni esse perferendis quibusdam animi nam quia neque voluptatibus, voluptates fugiat. Fuga, ea expedita?
                    Non saepe omnis optio, dolores aspernatur ro expedita praesentium unde minus fuga, ad alias cupiditate quibusdam dolores, inventore, nulla dignissimos dicta amet debitis nihil quas quidem eius. Cupiditate, at beatae!

                </div>
            </div>
        </Fragment>
    )
}

export default SinglePage
