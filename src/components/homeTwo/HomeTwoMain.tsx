import React from "react";
import SubscribeSectionTwo from "./SubscribeSectionTwo";
import PricingSectionTwo from "./PricingSectionTwo";
import PricingSectionCard from "./PricingSectionCard";
import OfferSectionTwo from "./OfferSectionTwo";
import ServiceSectionTwo from "./ServiceSectionTwo";
import ExperienceScetionTwo from "./ExperienceScetionTwo";
import StreamingSection from "./StreamingSection";
import HeroSectionTwo from "./HeroSectionTwo";
import BannerSection from "../front/BannerSection";
import FaqSection from "../front/FaqSection";
import BlogSection from "../front/BlogSection";
import BrandSection from "../front/BrandSection";

const HomeTwoMain = () => {
    return (
        <>
            <HeroSectionTwo />
            <PricingSectionTwo />
            <ExperienceScetionTwo />
            <ServiceSectionTwo />
            <OfferSectionTwo />
            <BannerSection />
            <PricingSectionCard />
            <SubscribeSectionTwo />
            <FaqSection />
            <StreamingSection />
            <BlogSection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default HomeTwoMain;