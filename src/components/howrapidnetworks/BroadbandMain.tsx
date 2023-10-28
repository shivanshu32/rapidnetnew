import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutSection from "./AboutSection";
import AboutFactSection from "./AboutFactSection";
import SkillSection from "./SkillSection";
import BannerSection from "../front/BannerSection";
import FaqSection from "../front/FaqSection";
import BrandSection from "../front/BrandSection";

import ServiceSection from "../front/ServiceSection";
import PricingSection from "../front/PricingSection";
import FaqCta from '../faq/FaqCta';

import OfferSection from "../front/OfferSection";
import SubscribeSection from "../front/SubscribeSection";

const AboutMain = () => {
    return (
        <>
            <Breadcrumb title="How Rapidnet Works" subTitle="How Rapidnet Works" />
            {/* <AboutSection /> */}
            <PricingSection />
            <FaqCta />
            <AboutFactSection />
            <BannerSection />
            {/* <SkillSection /> */}
            {/* <FaqSection /> */}
            {/* <BrandSection paddingClass="ptt-0" /> */}
        </>
    );
};

export default AboutMain;