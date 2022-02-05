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
                    <h3 style={{ fontSize: '1rem', lineHeight: 1.5, marginBottom: '.5rem' }}>{tech}</h3>
                    <hr style={{ color: '#c1c1c1', opacity: .5, width: '50%', textalign: 'left' }} />
                    <small style={{ color: 'gray' }}>show detail</small>
                </div>
            </div>
        </Link>
    )
}

export default SinglePortfolio