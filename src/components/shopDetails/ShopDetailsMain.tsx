import dynamic from 'next/dynamic';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BrandSection from '../front/BrandSection';
const ShopDetailsConent = dynamic(() => import('./ShopDetailsConent'), {
    ssr: false
})
import { idType } from '@/interFace/interFace';

const ShopDetailsMain = ({ id }: idType) => {
    return (
        <>
            <Breadcrumb title="Shop Details" subTitle="Shop Details" />
            <ShopDetailsConent id={id} />
            <BrandSection paddingClass="pt-60" />
        </>
    );
};

export default ShopDetailsMain;