import Link from 'next/link';
import React from 'react';
import thumb from "../../../public/assets/img/images/special_offer_img.jpg"
import Image from 'next/image';

const OfferSection = () => {
    return (
        <section className="special-offer-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2">
                        <div className="special-offer-img wow fadeInRight" data-wow-delay=".2s">
                            <Image src={thumb} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            <div className="special-offer-text">Coming Soon</div>
                            <div className="special-offer-mbps">
                                <span>UP TO</span>
                                <h3 className="title">40 MB</h3>
                                <p>PER Second</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-40">
                            <h2 className="title">Home Broadband Services</h2>
                        </div>
                        <div className="special-offer-content">
                            <p>Rapidnet is in process of launching home broadband services customized for your usuage soon. Please get in touch to check availability in your area.</p>
                            <div className="special-price-wrap">
                                <h2 className="special-price"><sup>₹</sup>599<sub>Monthly</sub></h2>
                                <p className="trial-link"><i className="flaticon-satellite-dish"></i><Link href="/contact">Launching Soon</Link></p>
                            </div>
                            {/* <Link href="/pricing" className="btn transparent-btn">Get started</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;