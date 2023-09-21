import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogContentMain from './BlogContentMain';
import BrandSection from '../front/BrandSection';

const BlogMain = () => {
    return (
        <>
            <Breadcrumb title="Blog" subTitle="Blog" />
            <BlogContentMain />
            <BrandSection paddingClass="" />
        </>
    );
};

export default BlogMain;