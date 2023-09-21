import Link from 'next/link';
import React from 'react';
import pdfIcon from "../../../public/assets/img/icons/pdf.png"
import docIcon from "../../../public/assets/img/icons/doc.png"
import Image from 'next/image';
const ServiceSidebarWidget = () => {
    return (
        <aside className="services-sidebar">
            <div className="widget services-widget">
                <ul className="services-sidebar-list">
                    <li className="active"><Link href="/services"><span className="count">01.</span> Broadband Connection</Link></li>
                    <li><Link href="/services"><span className="count">02.</span> Wi-Fi Internet</Link></li>
                    <li><Link href="/services"><span className="count">03.</span> Satellite TV Box</Link></li>
                    <li><Link href="/services"><span className="count">04.</span> Netbox TV Box</Link></li>
                    <li><Link href="/services"><span className="count">05.</span> Mobile Connection</Link></li>
                    <li><Link href="/services"><span className="count">06.</span> Home Service</Link></li>
                </ul>
            </div>
            <div className="widget sidebar-doc-download">
                <h5 className="title"><span>Download</span></h5>
                <ul className="services-doc-list">
                    <li>
                        <div className="icon"><Image src={pdfIcon} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" /></div>
                        <div className="content">
                            <h6 className="title"><Link href="/service-details">Service Brochure</Link></h6>
                            <span>PDF <small>|</small> 13 MB</span>
                        </div>
                    </li>
                    <li>
                        <div className="icon"><Image src={docIcon} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" /></div>
                        <div className="content">
                            <h6 className="title"><Link href="/service-details">Company Profile</Link></h6>
                            <span>Word <small>|</small> 25 MB</span>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default ServiceSidebarWidget;