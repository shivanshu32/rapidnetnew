import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RefundPolicySection from './RefundPolicySection';
import BrandSection from '../front/BrandSection';

const RefundPolicyMain = () => {
    return (
        <>
            <Breadcrumb title="Refund Policy" subTitle="Refund Policy" />
            <RefundPolicySection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default RefundPolicyMain;