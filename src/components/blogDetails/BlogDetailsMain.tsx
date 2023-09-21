import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogDetailsContent from './BlogDetailsContent';
import { idType } from '@/interFace/interFace';
import BrandSection from '../front/BrandSection';

const BlogDetailsMain = ({id}:idType) => {
    return (
        <>
            <Breadcrumb title="Blog Details" subTitle="Blog Details" />
            <BlogDetailsContent id={id} />
            <BrandSection paddingClass="pt-60" />
        </>
    );
};

export default BlogDetailsMain;