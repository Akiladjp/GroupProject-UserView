/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from './Carousel'
import first from '../assets/1.jpg'
import second from '../assets/2.jpg'
import third from '../assets/3.jpg'

export default function OfferBanner() {
    const slides = [
        first,
        second,
        third,
    ]

    return (
        <div className='max-w-lg'>
            <Carousel autoSlide={true} autoSlideInterval={4000}>
                {slides.map((s, index) => (
                    <img className='' key={index} src={s} alt={`Slide ${index + 1}`} />
                ))}
            </Carousel>
        </div>
    )
}
