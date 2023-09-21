import Link from 'next/link';
import React from 'react';
import FactSection from '../front/FactSection';
import Image from 'next/image';
import thumb1 from "../../../public/assets/img/images/fact_img.jpg"
import thumb2 from "../../../public/assets/img/images/fact_img02.jpg"

const ExperienceScetionTwo = () => {
    return (
        <section className="fact-area pt-85 pb-110">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="fact-img-wrap">
                            <Image src={thumb1} style={{ maxWidth: "100%", height: "auto" }} className="main-img" alt="img not found" />
                            <Image src={thumb2} style={{ maxWidth: "100%", height: "auto" }} className="small-img" alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title mb-40">
                            <h2 className="title">Experience The Features Magic of Netbox</h2>
                        </div>
                        <div className="video-content-wrap">
                            <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble.</p>
                            <FactSection />
                            <Link href="/pricing" className="btn transparent-btn">Try Us Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceScetionTwo;