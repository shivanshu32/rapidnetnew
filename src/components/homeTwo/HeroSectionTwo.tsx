"use client"

import { homeTwoSliders } from '@/data/home-two-slider-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
const HeroSectionTwo = () => {

    const settings = {
        autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		fade: true,
		arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <div className="slider-active">
                <Slider {...settings}>
                   
                  
                    {
                        homeTwoSliders.length && homeTwoSliders.map((item)=>(
                            <div key={item.id} className="single-slider">
                            <div className='slider-bg' style={{ backgroundImage:`url(${item.img.src})`}}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-9">
                                            <div className="banner-content">
                                                <h2 className="title" data-animation="fadeInUp" data-delay=".2s" data-duration="1.2s"> {item.title} </h2>
                                                <ul className="slider-services-list">
                                                   
                                                    {
                                                        item.servicesList && item.servicesList.map((i,index)=>(
                                                            <li key={index} data-animation="fadeInUp" data-delay=".4s" data-duration="1.2s"><Image src= {i.img} style={{ maxWidth: "19px", height: "auto" }} alt="img not found"/> {i.serviceTitle} </li>
                                                        ))
                                                    }
                                                </ul>
                                                <Link href="/contact" className="btn">Contact Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default HeroSectionTwo;