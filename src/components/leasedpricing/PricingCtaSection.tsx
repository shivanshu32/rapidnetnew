import Link from 'next/link';
import React from 'react';

const PricingCtaSection = () => {
    return (
        <section className="pricing-cta-area pb-50 pt-85">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10">
                        <div className="pricing-cta-content text-center">
                            <h4 className="title">Not happy with these plans? Contact Us</h4>
                            <p>Home Internet to connect your computer, phone, and other devices in your home simultaneously. People over time-we
                            appreciate your patience.</p>
                            <Link href="/contact" className="btn">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCtaSection;