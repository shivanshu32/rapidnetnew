import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TermsandConditionsSection from './termsandConditionsSection';
import BrandSection from '../front/BrandSection';

const TermsandConditionsMain = () => {
    return (
        <>
            <Breadcrumb title="Terms and Conditions" subTitle="Terms and Conditions" />
            <TermsandConditionsSection />
            {/* <BrandSection paddingClass="" /> */}
        </>
    );
};

export default TermsandConditionsMain;