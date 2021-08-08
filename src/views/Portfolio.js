import React from 'react'
import './Portfolio.css'
import SinglePortfolio from './SinglePortfolio'

const Portfolio = (props) => {

    const PORTFOLIO = [
        {
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            title: 'Website Embassy',
            description: 'HTML - CSS - React - Nodes - Nginx',
            link: "https://eyespeedtech.co.za"
        },
        {
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            title: 'Mobile App - 7/7 ',
            description: 'HTML - CSS - React Native - Nodes - Nginx',
            link: "https://eyespeedtech.co.za"
        },
        {
            image: 'https://miro.medium.com/max/11344/1*32h8ts3A-7XNr6A4Js87ng.jpeg',
            title: 'Minister of Education',
            description: 'HTML - CSS - React - Wordpress - Mysql',
            link: 'https://eyespeedtech.co.za'
        }
    ]

    return (
        <div className="portfolio">
            <h1 className="portfolio__title">Projects</h1>
            <h4 className="portfolio__subheading">My Recents Projects</h4>
            <div className="projects__container">
                {PORTFOLIO.map((portfolio) => {
                    return <SinglePortfolio portfolio={portfolio} />
                })}
            </div>
        </div>
    )
}

export default Portfolio
