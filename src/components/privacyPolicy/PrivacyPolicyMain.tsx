import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import PrivacyPolicySection from './PrivacyPolicySection';
import BrandSection from '../front/BrandSection';

const PrivacyPolicyMain = () => {
    return (
        <>
            <Breadcrumb title="Privacy & Policy" subTitle="Privacy & Policy" />
            <PrivacyPolicySection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default PrivacyPolicyMain;