import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PricingSection from './PricingSection';
import SubscribeSectionTwo from '../homeTwo/SubscribeSectionTwo';
import PricingCtaSection from './PricingCtaSection';
import PricingCardSection from './PricingCardSection';
import BrandSection from '../front/BrandSection';

const PricingMain = () => {
    return (
        <>
            <Breadcrumb title="Pricing" subTitle="Pricing" />
            <PricingSection />
            <SubscribeSectionTwo />
            <PricingCardSection />
            <PricingCtaSection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default PricingMain;