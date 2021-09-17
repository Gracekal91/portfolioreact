import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow  next" onClick={onClick}>
            < FaArrowRight />
        </div>
    )
}

const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow  prev" onClick={onClick}>
            <FaArrowLeft />
        </div>
    )
}




const SliderImage = ({ Projects }) => {
    const [imageIndex, setImageIndex] = useState(0)
    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }

    return (
        <div>
            <Slider {...settings}>
                {Projects.map((project, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <p>{project.name}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SliderImage
