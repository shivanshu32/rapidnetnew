//@refresh
"use client";
import React, { useEffect } from 'react';
import { animationCreate } from '@/utils/utils';
import Footer from './footer/Footer';
import HeaderOne from './header/HeaderOne';
import BacktoTop from '@/components/common/backToTop/BacktoTop';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { usePathname } from "next/navigation";
import HeaderTwo from './header/HeaderTwo';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 200);
  }, [])

  return (
    <>
      <BacktoTop />
      {(() => {
        switch (pathName) {
          case "/home-two":
            return <HeaderTwo />;
          default:
            return <HeaderOne />;
        }
      })()}
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
