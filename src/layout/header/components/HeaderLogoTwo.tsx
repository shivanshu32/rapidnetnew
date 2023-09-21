import Link from 'next/link';
import React from 'react';
import logo from "../../../../public/assets/img/logo/fw_logo.png"
import Image from 'next/image';
const HeaderLogoTwo = () => {
    return (
        <div className="header-two-logo">
            <div className="container custom-container">
                <div className="path-logo">
                    <Link href="/"><Image src={logo} style={{ width: "100%", height: "auto" }} alt="img not found"/></Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderLogoTwo;