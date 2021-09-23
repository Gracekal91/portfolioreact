import React from 'react'
import './Portfolio.css'
import SinglePortfolio from './SinglePortfolio'
import Fade from 'react-reveal/Fade'
import pt from '../../images/portfolio_1.svg';

const Portfolio = ({ projects }) => {

    return (
        <div className="portfolio">
            <div className="portfolio__hero">
                <div className="portfolio__hero__left">
                    <Fade left>
                        <h1 className="portfolio__title">Projects</h1>
                    </Fade>
                    <h4 className="portfolio__subheading">My Recents Projects</h4>
                </div>
                <div className="portfolio__hero__right">
                    <Fade right>
                        <img src={pt} style={{ height: '300px' }} alt="portfolio pic" />
                    </Fade>
                </div>
            </div>
            <div className="portfolio__container">
                {projects.map((project) => {
                    return <SinglePortfolio portfolio={project} />
                })}
            </div>
        </div>
    )
}

export default Portfolio