import React from 'react'
import { Link } from 'react-router-dom'
import './SinglePortfolio.css'

const SinglePortfolio = (props) => {
    const { title, description, image, link } = props.portfolio
    return (
        <div className="single__portfolio">
            <img src={image} width="100%" height="300px" />
            <div className="single__portfolio__content">
                <p>{title}</p>
                <p>{description}</p>
                <Link to={link} target='_blank'>
                    <button className="portfolio__btn">Visit the Project</button>
                </Link>
            </div>
        </div>
    )
}

export default SinglePortfolio