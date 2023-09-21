import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import CartSection from './CartSection';
import BrandSection from '../front/BrandSection';

const CartMain = () => {
    return (
        <>
            <Breadcrumb title="Cart" subTitle="Cart" />
            <CartSection />
            <BrandSection paddingClass="pt-60" />
        </>
    );
};

export default CartMain;