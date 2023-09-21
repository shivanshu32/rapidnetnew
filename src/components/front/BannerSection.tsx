import Link from 'next/link';
import React from 'react';
import bgImg from "../../../public/assets/img/bg/cta_bg.jpg"
const BannerSection = () => {
    return (
        <section className="cta-area cta-bg jarallax" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-10">
                        <div className="cta-content text-center">
                            <div className="section-title white-title mb-35">
                                <h2 className="title">Need Fast & Secure Broadband? Use Netbox & The Real Network</h2>
                            </div>
                            <div className="cta-btn-wrap">
                                <Link href="/pricing" className="btn">View our Plans</Link>
                                <span className="or">OR</span>
                                <Link href="tel:872670780" className="btn transparent-btn">+1 870 920 987</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;