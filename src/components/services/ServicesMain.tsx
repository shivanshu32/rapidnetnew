import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ServiceVideoSection from "./ServiceVideoSection";
import ServiceCardSection from "./ServiceCardSection";
import ServicePricingSection from "./ServicePricingSection";
import BrandSection from "../front/BrandSection";

const ServicesMain = () => {
    return (
        <>
            <Breadcrumb title="Services" subTitle="Services" />
            <ServiceVideoSection />
            <ServiceCardSection />
            <ServicePricingSection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default ServicesMain;