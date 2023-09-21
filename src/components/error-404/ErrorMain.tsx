import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ErrorContent from './ErrorContent';
import BrandSection from '../front/BrandSection';

const ErrorMain = () => {
    return (
        <>
            <Breadcrumb title="404 Error" subTitle="Error Page" />
            <ErrorContent />
            <BrandSection paddingClass="" />
        </>
    );
};

export default ErrorMain; 