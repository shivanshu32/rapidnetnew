import Link from 'next/link';
import React from 'react';
import ServiceVideoSection from './ServiceVideoSection';
import ServiceAccordion from './ServiceAccordion';
import ServiceSidebarWidget from './ServiceSidebarWidget';
import { idType } from '@/interFace/interFace';
import service_data from '@/data/service-data';
import thumb1 from "../../../public/assets/img/images/services_details01.jpg"
import thumb2 from "../../../public/assets/img/images/services_chart.svg"
import icon from "../../../public/assets/img/icons/check.png"
import Image from 'next/image';


const  ServiceDetailsContent = ({ id }: idType) => {
    const service = service_data.find(item=> item.id == id)
    
    return (
        <div className="services-details-area pt-120 pb-50">
            <div className="container">
                <div className="row services-details-wrap">
                    <div className="col-4">
                        <ServiceSidebarWidget />
                    </div>
                    <div className="col-8">
                        <div className="services-details-img">
                            <Image src={thumb1} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                        </div>
                        <div className="services-details-content">
                            <h2 className="title">{service?.title && service?.title}</h2>
                            <p>All kinds of laptop, desktop computer servicing center forIt is a long established fact that a reader will be distracted by the readable computer disk. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. Predefined chunks as necessary, making this the first true generator on the Internet. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                            <figure>
                                <div className="row">
                                    <div className="col-xl-6 col-md-7">
                                        <p>From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires, and wheel alignment.</p>
                                        <div className="services-chart">
                                            <Image src={thumb2} style={{ maxWidth: "100%", height: "auto" }} alt="img not found" />
                                        </div>
                                        <ul className="services-growth-list">
                                            <li><Image src={icon} style={{ width: "100%", height: "auto" }}  alt="img not found" /> Single Device Uses</li>
                                            <li><Image src={icon} style={{ width: "100%", height: "auto" }}  alt="img not found" /> Internet Connection</li>
                                            <li><Image src={icon} style={{ width: "100%", height: "auto" }}  alt="img not found" /> Phone & Computer</li>
                                            <li><Image src={icon} style={{ width: "100%", height: "auto" }}  alt="img not found" /> Broadband Success</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 col-md-5">
                                        <ServiceVideoSection />
                                    </div>
                                </div>
                            </figure>
                            <p>From oil changes, filter replacements, and fluid flushes to brakes and brake repair, shocks and struts, muffler repair, tires, and wheel alignment, we’ve got you covered. Use the quick links in the gold bar to book an appointment at your Car Repair Service store today. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <ServiceAccordion />
                            <div className="services-details-bottom">
                                <Link href="/contact" className="btn">Contact Us</Link>
                                <div className="footer-call">
                                    <div className="icon">
                                        <i className="flaticon-support"></i>
                                    </div>
                                    <div className="content">
                                        <span>Call For Help</span>
                                        <h6 className="title"><Link href="tel:547587587">(987) 547587587</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsContent;