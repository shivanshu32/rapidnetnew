import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import thumb from "../../../public/assets/img/images/subscribe_img02.png"
import bgImg from "../../../public/assets/img/bg/subscribe_bg02.jpg"
const SubscribeSectionTwo = () => {
    return (
        <section className="subscribe-two-area subscribe-two-bg" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                        <div className="subscribe-img wow fadeInRight" data-wow-delay=".2s">
                            <Image src={thumb} style={{ maxWidth: "inherit", height: "auto" }} alt="img not found" />
                            <h2 className="overlay-price"><span>Only</span> $89 <span>Per Month</span></h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title white-title mb-30">
                            <h2 className="title">Enjoy Sports Movies, TV Shows & More</h2>
                        </div>
                        <div className="subscribe-content">
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there {`isn't`} anything hidden in the middle of text</p>
                            <h4 className="title"><span>Subscribe Netbox TV Box & Get</span> FREE Wi-Fi For 1 Month</h4>
                            <Link href="/pricing" className="btn">Try Us Free</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeSectionTwo;