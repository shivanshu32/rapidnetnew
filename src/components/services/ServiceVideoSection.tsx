"use client"

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import thumb from "../../../public/assets/img/images/in_services_img.jpg"
import icon from "../../../public/assets/img/icons/check.png"
import Image from 'next/image';
const ServiceVideoSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <>
            <section className="inner-services-area pt-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="services-inner-img wow fadeInRight" data-wow-delay=".2s">
                                <Image src={thumb} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                <div className="video-paly">
                                    <button type='button' className="popup-video" onClick={() => { openVideoModal() }}> <i className="fas fa-play"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title mb-30">
                                <h2 className="title">Find Perfect Network Solutions From Us</h2>
                            </div>
                            <div className="services-inner-content">
                                <p>Home Internet to connect your computer, phone, and other devices in your home simultaneously.</p>
                                <ul className="services-inner-list">
                                    <li><Image src={icon} style={{ width: "100%", height: "auto" }} alt="img not found" /> We ensure quality service</li>
                                    <li><Image src={icon} style={{ width: "100%", height: "auto" }} alt="img not found" /> 24/7 VIP support</li>
                                    <li><Image src={icon} style={{ width: "100%", height: "auto" }} alt="img not found" /> Skilled technical team</li>
                                    <li><Image src={icon} style={{ width: "100%", height: "auto" }} alt="img not found" /> Free internet in new connection</li>
                                </ul>
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

export default ServiceVideoSection;