"use client"

import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/css/bundle'
import tvshows_data from '@/data/tvshows-data';
import ModalVideo from "react-modal-video";
import Image from "next/image";

const TvShows = () => {
    const [singleVideo, setSingleVideo] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = (url: any) => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
        setSingleVideo(url)
    };

    //for rating handle
    const getRating = (rating: any) => {
        let empty_rating_count = 5 - rating;
        let ratings = [];
        for (let i = 0; i < rating; i++) {
            ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>)
        }
        for (let i = 0; i < empty_rating_count; i++) {
            ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>)
        }
        return ratings;
    }
    //for rating handle

    return (
        <>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId={singleVideo} onClose={() => { openVideoModal(singleVideo) }} />

            <section className="streaming-area streaming-bg" style={{ backgroundImage: `url(${'/assets/img/bg/streaming_bg.jpg'})` }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7">
                            <div className="section-title white-title text-center mb-20">
                                <h2 className="title">Popular TV Shows Now Streaming</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div id="streaming-active">
                                <Swiper
                                    modules={[EffectCoverflow, Autoplay]}
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    loop={true}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={true}
                                    autoplay={{
                                        delay: 3000,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        1400: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 1,
                                        },
                                        0: {
                                            slidesPerView: 1,
                                        }
                                    }}
                                    className="mySwiper"
                                >
                                    {tvshows_data && tvshows_data.slice(0, 5).map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <>
                                                <div className="streaming-item">
                                                    <div className="streaming-thumb">
                                                        <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                        <span className="tag">{item.tag}</span>
                                                        <button type='button' className="popup-video" onClick={() => { openVideoModal(item.videoUrl) }}><i className="fas fa-play"></i></button>
                                                    </div>
                                                    <div className="streaming-content">
                                                        <span className="category">{item.category}</span>
                                                        <h5 className="title">{item.title}</h5>
                                                        <div className="stream-rating">
                                                            {getRating(item?.rating)}
                                                            <span>({item.ratingCount} Reviews)</span>
                                                        </div>
                                                        <div className="streaming-time">
                                                            <p>{item.days} <span>{item.time}</span> {item.amPm}</p>
                                                            <div className="stream-logo">
                                                                <Image src={item.logo} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TvShows;