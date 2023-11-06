
import React from "react";
import PricingPlan from "../leasedpricing/PricingPlan";

const LeasedPricingSection = () => {
  return (
    <section className="pricing-area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="section-title text-center mb-50">
              <h2 className="title">Leased Line Plans</h2>
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

export default LeasedPricingSection;
