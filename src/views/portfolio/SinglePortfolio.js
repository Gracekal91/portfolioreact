import React from 'react'
import { Link } from 'react-router-dom'
import './SinglePortfolio.css'

const SinglePortfolio = (props) => {
    const { image, id, tech } = props.portfolio
    return (
        <Link to={{ pathname: `/portfolio/${id}`, state: { portfolios: props.portfolio } }}>
            <div className="single__portfolio">
                <img src={image} width="100%" height="250px"
                    style={{ borderRadius: '10px 10px 0 0' }} alt="project representation" />
                <div className="single__portfolio__content">
                    <p>{tech}</p>
                </div>
            </div>
        </Link>
    )
}

export default SinglePortfolio