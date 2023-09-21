
import React from 'react';
import bgImg from "../../../public/assets/img/bg/pricing_bg.jpg"
import PricingPlan from '../pricing/PricingPlan';
const ServicePricingSection = () => {
    return (
        <section className="pricing-area position-relative pt-110 pb-20">
            <div className="pricing-bg" style={{ backgroundImage: `url(${bgImg.src})` }}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title text-center white-title mb-50">
                            <h2 className="title">Discover Our Best Value Plans</h2>
                        </div>
                    </div>
                </div>
                <div className="pricing-plan-wrap">
                    
                    <PricingPlan customeClass="justify-content-center"/>
                </div>
            </div>
        </section>
    );
};

export default ServicePricingSection;