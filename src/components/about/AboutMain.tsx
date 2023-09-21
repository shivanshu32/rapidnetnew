import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutSection from "./AboutSection";
import AboutFactSection from "./AboutFactSection";
import SkillSection from "./SkillSection";
import BannerSection from "../front/BannerSection";
import FaqSection from "../front/FaqSection";
import BrandSection from "../front/BrandSection";

const AboutMain = () => {
    return (
        <>
            <Breadcrumb title="About Us" subTitle="About Us" />
            <AboutSection />
            <AboutFactSection />
            <BannerSection />
            <SkillSection />
            <FaqSection />
            <BrandSection paddingClass="ptt-0" />
        </>
    );
};

export default AboutMain;