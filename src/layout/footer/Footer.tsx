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
                                            <h6 className="title"><a href="tel:9311380931">+91 9311380931</a></h6>
                                        </div>
                                    </div>
                                    <h6 className="title">Contact info</h6>
                                    <p>Plot-22, Shakti Khand-2, Indrapuram, Ghaziabad, UP-201014, India</p>
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
                                    <h4 className="title">Quick Links</h4>
                                </div>
                                <ul className="fw-list">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/broadband">Broadband</Link></li>
                                    <li><Link href="/leased-lines">Leased Line</Link></li>
                                   
                                    <li><Link href="/contact">Contact</Link></li>
                        
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title">Policies</h4>
                                </div>
                                <ul className="fw-list">
                                   
                                    <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
                                    <li><Link href="/cancellation-policy">Cancellation Policy</Link></li>
                                    <li><Link href="/privacy-policy">Privacy & Cookie Policy</Link></li>
                                    <li><Link href="/fair-use-policy">Fair Use Policy</Link></li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="footer-widget">
                                <div className="fw-title">
                                    <h4 className="title"></h4>
                                </div>
                                <ul className="fw-schedule-list">
                                    <li> <span></span></li>
                                    {/* <li>Tuesday - Wed - Thurs <span>9:30 AM - 12 PM</span></li> */}
                                    <li> <span className="close"></span></li>
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
