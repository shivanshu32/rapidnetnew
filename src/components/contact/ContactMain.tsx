import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import ContactFormSection from './ContactFormSection';
import ContactMap from './ContactMap';
import BrandSection from '../front/BrandSection';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb title="Contact Us" subTitle="Contact Us" />
            <ContactFormSection />
            <ContactMap />
            <BrandSection paddingClass="pt-120" />
        </>
    );
};

export default ContactMain;