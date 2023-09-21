import Link from "next/link";
import React from "react";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer>
            <div className="footer-wrap">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-3">
                            <div className="footer-widget">
                                <div className="footer-contact">
                                    <div className="footer-call">
                                        <div className="icon">
                                            <i className="flaticon-support"></i>
                                        </div>
                                        <div className="content">
                                            <span>Call us 24/7</span>
                                            <h6 className="title"><a href="tel:547587587">(987) 547587587</a></h6>
                                        </div>
                                    </div>
                                    <h6 className="title">Contact info</h6>
                                    <p>Street House, Greater London NW1 8JR, UK</p>
                                    <div className="footer-social">
                                        <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                        <Link href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                        <Link href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">Categories</h4>
                                </div>
                                <ul className="fw-list">
                                    <li><Link href="/service-details">Laptops & Computers</Link></li>
                                    <li><Link href="/service-details">Home & Life Style</Link></li>
                                    <li><Link href="/service-details">{`Men's`} Fashion</Link></li>
                                    <li><Link href="/service-details">{`Women's`} Fashion</Link></li>
                                    <li><Link href="/service-details">Sport & Gyms</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">About Company</h4>
                                </div>
                                <ul className="fw-list">
                                    <li><Link href="/about-us">About Company</Link></li>
                                    <li><Link href="/contact">Contact Us</Link></li>
                                    <li><Link href="/privacy-policy">Privacy policy</Link></li>
                                    <li><Link href="/privacy-policy">Terms & Conditions</Link></li>
                                    <li><Link href="/about-us">Mission & Vision</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">Service Schedule</h4>
                                </div>
                                <ul className="fw-schedule-list">
                                    <li>Saturday - Sunday - Mon <span>8:30 AM - 10 PM</span></li>
                                    <li>Tuesday - Wed - Thurs <span>9:30 AM - 12 PM</span></li>
                                    <li>Friday : <span className="close">Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </footer>
    </>
  );
};

export default Footer;
