import React, { Fragment } from 'react'
import './PortfolioDetail.css'
import { Flip } from 'react-reveal'
import { Link } from 'react-router-dom'

const PortfolioDetail = (props) => {
    const { image, link, link2, title, about, development } = props.location.state.portfolios
    return (
        <Fragment>
            <header className="singleHeader">
                <h1 style={{ color: 'gray', fontWeight: '400', marginTop: '-5rem' }}>{title}</h1>
            </header>
            <div className="singleImage">
                <img src={image} alt="project ..." />
            </div>
            <div className="projectDescription">
                <div className="projectDescLeft">
                    <h1 style={{ color: 'orange' }}>About The Project</h1>
                    {about.map((p, i) => {
                        return <p key={i} style={{ textAlign: 'left', marginBottom: '.5rem' }}>{p}</p>
                    })
                    }
                </div>
                <div className="projectDescRight">
                    <h1>Development</h1>
                    {development.map((p, i) => {
                        return <p key={i} style={{ textAlign: 'left', marginBottom: '.5rem' }}>{p}</p>
                    })

                    }

                    {link2 &&

                        <Link to={{ pathname: `${link2}` }} target="_blank">
                            <button className="portfolio__btn">App demo</button>
                        </Link>
                    }

                    <Flip left>
                        <Link to={{ pathname: `${link}` }} target="_blank">
                            <button className="portfolio__btn">Visit the Project</button>
                        </Link>
                    </Flip>
                    <div />
                </div>
            </div>
        </Fragment>
    )
}

export default PortfolioDetail
