
import React from "react";
import PricingPlan from "./PricingPlan";
const PricingSection = () => {
  return (
    <section className="pricing-area pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-11">
            <div className="section-title text-center mb-55">
              <h2 className="title">{`Let's`} Discover Our Best Packages</h2>
              <p>
                We are the broadband internet service provider situated at New
                York City and on the other big reason pay more should is that{" "}
                {`they're`} too loyal.
              </p>
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
