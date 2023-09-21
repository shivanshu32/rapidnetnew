import React from 'react';
import thumb1 from "../../../public/assets/img/images/best_team01.png"
import thumb2 from "../../../public/assets/img/images/best_team02.png"
import Image from 'next/image';
const TeamProgressSection = () => {
    return (
        <section className="best-team-area pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="best-team-images">
                            <Image src={thumb1} style={{ width: "100%", height: "auto" }} className="main-img" alt="img not found" />
                            <Image src={thumb2} style={{ width: "100%", height: "auto" }} className="second-img" alt="img not found" />
                            <h4 className="overlay-content">We Are <br /> The Best Team Ever</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="section-title mb-30">
                            <h2 className="title">{`We're`} Always Ready To Give Best Service</h2>
                        </div>
                        <div className="experience-content">
                            <p>We are the broadband internet service provider situated at New York City and on the other big reason pay more than they should is that {`they're`} too loyal.</p>
                            <div className="progress-item">
                                <span className="title">Technical Skills</span>
                                <div className="progress--bar" data-percentage="90%">
                                    <div className="progress-number" style={{ left: '90%' }}>
                                        <span className="percent">90%</span>
                                    </div>
                                    <div className="progress-bg">
                                        <div className="progress-fill" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-item">
                                <span className="title">Customer Support</span>
                                <div className="progress--bar" data-percentage="80%">
                                    <div className="progress-number" style={{ left: '80%' }}>
                                        <span className="percent">80%</span>
                                    </div>
                                    <div className="progress-bg">
                                        <div className="progress-fill" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-item">
                                <span className="title">Networking SKills</span>
                                <div className="progress--bar" data-percentage="70%">
                                    <div className="progress-number" style={{ left: '70%' }}>
                                        <span className="percent">70%</span>
                                    </div>
                                    <div className="progress-bg">
                                        <div className="progress-fill" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamProgressSection;