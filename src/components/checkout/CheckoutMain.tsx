import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CheckoutSection from './CheckoutSection';
import BrandSection from '../front/BrandSection';

const CheckoutMain = () => {
    return (
        <>
            <Breadcrumb title="Checkout" subTitle="Checkout" />
            <CheckoutSection />
            <BrandSection paddingClass="pt-70" />
        </>
    );
};

export default CheckoutMain;