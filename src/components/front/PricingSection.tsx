
import React from "react";
import PricingPlan from "../pricing/PricingPlan";

const PricingSection = () => {
  return (
    <section className="pricing-area pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="section-title text-center mb-50">
              <h2 className="title">Discover Our Best Value Plans</h2>
            </div>
          </div>
        </div>
        <div className="pricing-plan-wrap">
           <PricingPlan customeClass=""/>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
