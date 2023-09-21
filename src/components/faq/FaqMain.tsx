import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import FaqSection from './FaqSection';
import FaqCta from './FaqCta';
import BrandSection from '../front/BrandSection';

const FaqMain = () => {
    return (
        <>
            <Breadcrumb title="FAQ Page" subTitle="FAQ" />
            <FaqSection />
            <FaqCta />
            <BrandSection paddingClass="pt-120" />
        </>
    );
};

export default FaqMain;