import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ShopContentMain from './ShopContentMain';
import BrandSection from '../front/BrandSection';

const ShopMain = () => {
    return (
        <>
            <Breadcrumb title="Shop" subTitle="Shop" />
            <ShopContentMain />
            <BrandSection paddingClass="" />
        </>
    );
};

export default ShopMain;