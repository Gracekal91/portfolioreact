import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero">

            <div className="content">
                <h1 className="hero__name">Welcome to GTech </h1>
                <p className="hero__description">
                    Welcome To My portfolio, Do not hesitate to drop a Message for your Projects, Have a look at my recents works.
                </p>
                <Link to="/portfolio">
                    <button className="hero__btn">
                        <i class="fa fa-cog" aria-hidden="true"></i>Projects</button>
                </Link>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <div class="circles">
                <div class="circle"></div>
                <div class="circle2"></div>
            </div>
        </div>
    )
}

export default Hero
