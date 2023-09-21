"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, } from 'swiper';
import 'swiper/css/bundle'
import brands_data from '@/data/brand-data';
import Image from 'next/image';
import Link from 'next/link';

interface classType {
    paddingClass: string;
}

const BrandSection = ({ paddingClass }: classType) => {
    return (
        <div className={`brand-area pb-120 ${paddingClass ? paddingClass : 'pt-70'}`}>
            <div className="container">
                <div className="brand-active swiper-container">
                    <div className="swiper-wrapper align-items-center">
                        <Swiper
                            modules={[A11y, Autoplay]}
                            spaceBetween={30}
                            loop={false}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                1400: {
                                    slidesPerView: 5,
                                }
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: true
                            }}
                        >
                            {brands_data && brands_data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="brand-item">
                                        <Link href="#"><Image src={item.img} style={{ width: "auto", height: "100%" }} alt="img not found"/></Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSection;