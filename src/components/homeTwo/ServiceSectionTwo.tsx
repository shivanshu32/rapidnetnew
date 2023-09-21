import service_data from '@/data/service-data';
import Link from 'next/link';
import React from 'react';
import bgImg from "../../../public/assets/img/bg/services_bg.jpg"

const ServiceSectionTwo = () => {
    return (
        <section className="services-area services-bg" style={{ backgroundImage: `url(${bgImg.src})` }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-7">
                        <div className="section-title white-title text-center mb-50">
                            <h2 className="title">Explore Our Netbox Services</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {service_data.slice(0, 4).map((item) => (
                        <div className="col-xl-3 col-lg-4 col-md-6" key={item.id}>
                            <div className="services-item service-item-two">
                                <div className="services-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="services-content">
                                    <h3 className="title"><Link href={`/service-details/${item.id}`}>{item.title}</Link></h3>
                                    <p>{item.teaser}</p>
                                    <Link href={`/service-details/${item.id}`} className="btn btn-link hover-underline">{item.btn}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionTwo;