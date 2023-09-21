import Link from 'next/link';
import React from 'react';
import bgImg from "../../../public/assets/img/bg/subscribe_bg.jpg"
import thumb from "../../../public/assets/img/images/subscribe_img.png"
import Image from 'next/image';

const SubscribeSection = () => {
    return (
        <section className="subscribe-area subscribe-bg" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="subscribe-img wow fadeInLeft" data-wow-delay=".2s">
                            <Image src={thumb} style={{ width: "100%", height: "auto" }} alt="img not found" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title mb-30">
                            <h2 className="title">Enjoy Sports Movies, TV Shows & More</h2>
                        </div>
                        <div className="subscribe-content">
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything hidden in the middle of text</p>
                            <h4 className="title"><span>Subscribe Netbox TV Box & Get</span> FREE Wi-Fi For 1 Month</h4>
                            <div className="subscribe-plan">
                                <h2 className="price"><span>Only</span> $89<sub>/Mon</sub></h2>
                                <Link href="/pricing" className="btn btn-link">View All Plans</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSection;