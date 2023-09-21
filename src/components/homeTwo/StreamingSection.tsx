"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import tvshows_data from '@/data/tvshows-data';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import shape1 from "../../../public/assets/img/images/streaming_shape01.png"
import shape2 from "../../../public/assets/img/images/streaming_shape02.png"
import shape3 from "../../../public/assets/img/images/streaming_shape03.png"
const StreamingSection = () => {

    const [singleVideo, setSingleVideo] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = (url: any) => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
        setSingleVideo(url)
    };

    return (
        <>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={singleVideo} onClose={() => { openVideoModal(singleVideo) }} />
        <section className="streaming-two-area streaming-two-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="streaming-two-title">
                            <span className="sub-title">Now Streaming</span>
                            <h2 className="title">Popular TV Shows</h2>
                            <Link href="/pricing" className="btn transparent-btn">Go Premium</Link>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="streaming-two-actives">
                            <div>
                                <Swiper
                                    modules={[Autoplay, A11y]}
                                    spaceBetween={30}
                                    loop={false}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1
                                        },
                                        768: {
                                            slidesPerView: 2
                                        },
                                        992: {
                                            slidesPerView: 2
                                        },
                                        1200: {
                                            slidesPerView: 3
                                        },
                                        1400: {
                                            slidesPerView: 4
                                        }
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        pauseOnMouseEnter: true,
                                    }}
                                >
                                    {tvshows_data && tvshows_data.slice(0, 5).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="streaming-two-item">
                                            <div className="streaming-two-thumb">
                                                <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                <span className="tag">{item.tag}</span>
                                                <button type='button' className="popup-video" onClick={() => { openVideoModal(item.videoUrl) }}><i className="fas fa-play"></i></button>
                                            </div>
                                            <div className="streaming-two-content">
                                                <span>{item.category}</span>
                                                <h4 className="title">{item.title}</h4>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="streaming-shape one"><Image src={shape1} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" /></div>
            <div className="streaming-shape two"><Image src={shape2} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" /></div>
            <div className="streaming-shape three"><Image src={shape3} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" /></div>
        </section>
        </>
    );
};

export default StreamingSection;