import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">

            <div className="content">
                <h1 className="hero__name">Welcome to my Portfolio </h1>
                <p className="hero__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                </p>
                <button className="hero__btn">Projects</button>
            </div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    )
}

export default Hero
