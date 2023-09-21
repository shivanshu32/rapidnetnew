import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamProgressSection from './TeamProgressSection';
import TeamSection from './TeamSection';
import TeamCtaSection from './TeamCtaSection';
import BrandSection from '../front/BrandSection';

const TeamMain = () => {
    return (
        <>
            <Breadcrumb title="Team" subTitle="Team" />
            <TeamProgressSection />
            <TeamSection />
            <TeamCtaSection />
            <BrandSection paddingClass="" />
        </>
    );
};

export default TeamMain;