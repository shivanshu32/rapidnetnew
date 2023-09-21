import { pricingCards } from '@/data/pricing-plan-card-data';
import Link from 'next/link';
import React from 'react';

const PricingSectionCard = () => {
    return (
        <section className="pricing-three-area pt-110 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="section-title text-center mb-50">
                            <h2 className="title">Discover Our Best Value Plans</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">

                    
                   {
                    pricingCards.length && pricingCards.map((item)=>(
                        <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                        <div className="pricing-three-item mb-30">
                            <div className="pricing-three-head">
                                <h4 className="title">{item.title}</h4>
                                <span className="devices-support"> {item.deviceSupport} </span>
                                <ul className="devices-icon-wrap">
                                   
                                    {
                                        item.devicesIcon && item.devicesIcon.map((i,index)=>(
                                            <li key={index}><i className={i.icon}></i></li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="pricing-three-list">
                                <ul>
                                    
                                    {
                                        item.pricingList && item.pricingList.map((i,index)=>(
                                            <li key={index}> {i.title} </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <h2 className="pricing-three-price"><span>From</span> {item.price} <span>/{item.time}</span></h2>
                            <Link href="/pricing" className="btn transparent-btn">Get Started</Link>
                        </div>
                     </div>

                    ))
                   }
                    
                </div>
            </div>
        </section>
    );
};

export default PricingSectionCard;