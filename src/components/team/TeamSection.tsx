import Link from 'next/link';
import React from 'react';
import thumb1 from "../../../public/assets/img/team/team_img01.jpg"
import thumb2 from "../../../public/assets/img/team/team_img02.jpg"
import thumb3 from "../../../public/assets/img/team/team_img03.jpg"
import thumb4 from "../../../public/assets/img/team/team_img04.jpg"
import thumb5 from "../../../public/assets/img/team/team_img05.jpg"
import thumb6 from "../../../public/assets/img/team/team_img06.jpg"
import thumb7 from "../../../public/assets/img/team/team_img07.jpg"
import thumb8 from "../../../public/assets/img/team/team_img08.jpg"
import Image from 'next/image';


const TeamSection = () => {
    return (
        <section className="team-area pt-110 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">Meet Our Skilled Team</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                                <Image src={thumb1} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Brandon Tailor</h4>
                                <span className="designation">Sr. Technician</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb2} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Daniel Brayan Hamel</h4>
                                <span className="designation">Customer Support</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb3} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Shane Decruse</h4>
                                <span className="designation">HR Executive</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb4} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Nikole Haraf Badol</h4>
                                <span className="designation">Customer Support</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb5} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">John Schrimsher</h4>
                                <span className="designation">Technical Support</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb6} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Charles Bradford</h4>
                                <span className="designation">Customer Support</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb7} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Elizabeth Paulsen</h4>
                                <span className="designation">Sr. Executive</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="team-item text-center">
                            <div className="team-thumb">
                            <Image src={thumb8} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                            </div>
                            <div className="team-content">
                                <h4 className="title">Thomas Deloach</h4>
                                <span className="designation">Jr. Executive</span>
                                <ul className="team-social">
                                    <li><Link href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link href="https://twitter.com/" target='_blank'><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.instagram.com/" target='_blank'><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target='_blank'><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;