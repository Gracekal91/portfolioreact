import React from 'react'
import { Link } from 'react-router-dom'
import './SinglePortfolio.css'
import Flip from 'react-reveal/Flip'

const SinglePortfolio = (props) => {
    const { title, description, image, link } = props.portfolio
    return (
        <div className="single__portfolio">
            <img src={image} width="100%" height="250px"
                style={{ borderRadius: '10px 10px 0 0' }} alt="project representation" />
            <div className="single__portfolio__content">
                <p>{title}</p>
                <p>{description}</p>
                <Flip left>
                    <Link to={{ pathname: `${link}` }} target="_blank">
                        <button className="portfolio__btn">Visit the Project</button>
                    </Link>
                </Flip>
            </div>
        </div>
    )
}

export default SinglePortfolio