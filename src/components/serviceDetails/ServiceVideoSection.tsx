"use client"

import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import thumb from "../../../public/assets/img/images/services_details02.jpg"
import Image from 'next/image';

const ServiceVideoSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <>
            <div className="services-details-video">
                <Image src={thumb} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                <ModalVideo channel='youtube' isOpen={isOpen} videoId='Cft-FZ3HiGI' onClose={() => { openVideoModal(); }} />
                <div className="video-paly">
                    <button type='button' className="popup-video" onClick={() => { openVideoModal(); }}> <i className="fas fa-play"></i> </button>
                </div>
            </div>
            <ModalVideo channel="youtube" isOpen={isOpen} videoId="4K6Sh1tsAW4"
                onClose={() => {
                    openVideoModal();
                }}
            />
        </>
    );
};

export default ServiceVideoSection;