import Link from 'next/link';
import React from 'react';

const PricingCardSection = () => {
    return (
        <section className="pricing-three-area pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Starter Bundle</h4>
                                <span className="devices-support">02 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-tv"></i></li>
                                    <li><i className="flaticon-wifi-router-1"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 15.99<span>/mon</span></h2>
                            <Link href="/checkout" className="btn transparent-btn">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Combo Bundle</h4>
                                <span className="devices-support">03 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-tv"></i></li>
                                    <li><i className="flaticon-wifi-router-1"></i></li>
                                    <li><i className="flaticon-device"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 25.99<span>/mon</span></h2>
                            <Link href="/checkout" className="btn transparent-btn">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Premium Bundle</h4>
                                <span className="devices-support">04 Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-tv"></i></li>
                                    <li><i className="flaticon-wifi-router-1"></i></li>
                                    <li><i className="flaticon-device"></i></li>
                                    <li><i className="flaticon-laptop"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 45.99<span>/mon</span></h2>
                            <Link href="/checkout" className="btn transparent-btn">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">Full House Pack</h4>
                                <span className="devices-support">Any Devices</span>
                                <ul className="devices-icon-wrap">
                                    <li><i className="flaticon-device-1"></i></li>
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    <li>Home broadband</li>
                                    <li>Satellite TV</li>
                                    <li>Cell phone connection</li>
                                    <li>Home security</li>
                                    <li>Home broadband</li>
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> 85.99<span>/mon</span></h2>
                            <Link href="/checkout" className="btn transparent-btn">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCardSection;