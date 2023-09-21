import Link from 'next/link';
import React from 'react';
import logo from "../../../public/assets/img/logo/w_logo.png"
import Image from 'next/image';
const FooterBottom = () => {
    return (
        <div className="copyright-wrap">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="footer-logo">
                            <Link href="/"><Image style={{ maxWidth: "177px", height: "auto" }} src={logo} alt="img not found"/></Link>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="copyright-text text-center text-md-end">
                            <p>Copyrighted by @Netbox - All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;