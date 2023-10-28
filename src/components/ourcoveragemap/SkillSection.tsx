"use client"

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import thumb from "../../../public/assets/img/images/progress_img.png"
import Image from 'next/image';
const SkillSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            <section className="experience-area pt-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2">
                            <div className="progress-video">
                                <Image src={thumb} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                                <div className="video-paly">
                                    <button type='button' className="popup-video" onClick={() => { openVideoModal() }}> <i className="fas fa-play"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-30">
                                <h2 className="title">{`We've`} The Best Skilled & Experienced Team</h2>
                            </div>
                            <div className="experience-content">
                                <p>Gauge your students’ skill level with the initial test and follow their progress. Internet to connect your computer, phone, and numerous other devices.</p>
                                <div className="progress-item">
                                    <span className="title">Technical Skills</span>
                                    <div className="progress--bar" data-percentage="90%">
                                        <div className="progress-number" style={{left: '90%'}}>
                                            <span className="percent">90%</span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill" style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <span className="title">Customer Support</span>
                                    <div className="progress--bar" data-percentage="80%">
                                        <div className="progress-number" style={{left: '80%'}}>
                                            <span className="percent">80%</span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill" style={{width: '80%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <span className="title">Networking SKills</span>
                                    <div className="progress--bar" data-percentage="70%">
                                        <div className="progress-number" style={{left: '70%'}}>
                                            <span className="percent">70%</span>
                                        </div>
                                        <div className="progress-bg">
                                            <div className="progress-fill" style={{width: '70%'}}></div>
                                        </div>
                                    </div>
                                </div>
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

export default SkillSection;