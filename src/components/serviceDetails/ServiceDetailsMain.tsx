import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ServiceDetailsContent from './ServiceDetailsContent';
import { idType } from '@/interFace/interFace';
import BrandSection from '../front/BrandSection';

const ServiceDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title="Service Details" subTitle="Service Details" />
            <ServiceDetailsContent id={id} />
            <BrandSection paddingClass="" />
        </>
    );
};

export default ServiceDetailsMain;