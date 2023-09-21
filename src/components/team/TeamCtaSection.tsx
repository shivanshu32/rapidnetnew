import Link from 'next/link';
import React from 'react';
import bgImg from "../../../public/assets/img/bg/hiring_bg.jpg"
const TeamCtaSection = () => {
    return (
        <section className="team-hiring-area mb-50">
            <div className="container">
                <div className="hiring-bg wow fadeInUp" data-wow-delay=".2s" style={{ backgroundImage:`url(${bgImg.src})`}}>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="team-hiring-content">
                                <h2 className="title">{`We're`} Hiring Technicians to Our team</h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hiring-btn text-center text-lg-end">
                                <Link href="/contact" className="btn transparent-btn">Join With Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamCtaSection;