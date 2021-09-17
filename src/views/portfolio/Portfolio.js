import React from 'react'
import './Portfolio.css'
import SinglePortfolio from './SinglePortfolio'
import Fade from 'react-reveal/Fade'
import eyespeed from '../../images/eyespeedtech.png'
import samipay from '../../images/samipay.png'
import pt from '../../images/portfolio_1.svg';

const Portfolio = (props) => {

    const PORTFOLIO = [
        {
            image: eyespeed,
            title: 'EYE SPEED TECHNOLOGY',
            tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
            link: "https://eyespeedtech.co.za",
            description: 'Hello this is the description'
        },
        {
            image: samipay,
            title: 'SAMIPAY',
            tech: 'HTML - CSS - JAVASCRIPT - MySQL - WORDPRESS - PHP',
            link: "https://samipay.co.za",
            description: 'Hello this is the description'
        },
        {
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            title: 'Minister of Education',
            tech: 'HTML - CSS - React - Wordpress - Mysql',
            link: 'https://eyespeedtech.co.za',
            description: 'Hello this is the description'
        }
    ]

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
                {PORTFOLIO.map((portfolio) => {
                    return <SinglePortfolio portfolio={portfolio} />
                })}
            </div>
        </div>
    )
}

export default Portfolio