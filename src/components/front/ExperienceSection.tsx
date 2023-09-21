"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import FactSection from './FactSection';
import bgImg from "../../../public/assets/img/bg/video_bg.jpg"
const ExperienceSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <>
            <section className="video-area video-bg" style={{ backgroundImage: `url(${bgImg.src})` }}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="video-paly">
                                <button type='button' className="popup-video" onClick={() => { openVideoModal() }}> <i className="fas fa-play"></i> </button>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title mb-40">
                                <h2 className="title">Experience The Features Magic of Netbox</h2>
                            </div>
                            <div className="video-content-wrap">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                                <FactSection />
                                <Link href="/pricing" className="btn">Try Us Free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="4K6Sh1tsAW4"
                onClose={() => {
                    openVideoModal();
                }}
            />
        </>

    );
};

export default ExperienceSection;