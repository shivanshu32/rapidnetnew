import Link from 'next/link';
import React from 'react';
import thumb from "../../../public/assets/img/images/map_img.png"
import Image from 'next/image';

const FaqSection = () => {
    return (
        <section className="faq-area pt-110 pb-120">
            <div className="container">
                <div className="row align-items-center align-items-xl-end">
                    <div className="col-lg-6">
                        <div className="section-title mb-40">
                            <h2 className="title">Frequently Asked Questions</h2>
                        </div>
                        <div className="faq-wrapper">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Do I have to be an existing Rapidnet customer?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes! {`You'll`} be able to use your Rapidnet Business Internet to connect your computer, phone, and numerous other devices simultaneously. 
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How much monthly plan cost?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                          Our business broadband plan starts from 599 per month
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What areas you cover
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Rapidnet business broadband services are available across Delhi NCR
                                                                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Do you offer Home broadband services?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                           Rapidnet is lauching home broadband services soon.
                                                         </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How to get new connection?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                           Please get in touch with contact details provided in website.
                                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-map-area">
                            <div className="faq-map-title">
                                <h4 className="title">We are everywhere</h4>
                                <p>Home Internet customers that did not provide an email address for service notifications</p>
                            </div>
                            <div className="faq-map text-center">
                                <Image src={thumb} style={{ maxWidth: "100%", height: "auto" }} alt="img not found"/>
                                <Link href="/contact" className="btn map-btn">Check Your Network Coverage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;