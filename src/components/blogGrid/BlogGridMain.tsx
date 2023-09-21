import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BrandSection from '../front/BrandSection';
import BlogGridSection from './BlogGridSection';

const BlogGridMain = () => {
    return (
        <>
            <Breadcrumb title="Blog Grid" subTitle="Blog Grid" />
            <BlogGridSection />
            <BrandSection paddingClass="pt-120" />
        </>
    );
};

export default BlogGridMain;