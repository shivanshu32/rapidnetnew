import React from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import PricingSection from "./PricingSection";
import BannerSection from "./BannerSection";
import OfferSection from "./OfferSection";
import SubscribeSection from "./SubscribeSection";
import FaqSection from "./FaqSection";
import TvShows from "./TvShows";
import BlogSection from "./BlogSection";
import BrandSection from "./BrandSection";
import ExperienceSection from "./ExperienceSection";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <ExperienceSection />
      <ServiceSection />
      <BannerSection />
      <OfferSection />
      <SubscribeSection />
      <FaqSection />
      <TvShows />
      <BlogSection />
      <BrandSection paddingClass="" />
    </>
  );
};

export default HomeMain;
