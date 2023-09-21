import { pricingPlan } from '@/data/pricing-plan-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface classType {
    customeClass:string
}

const PricingPlan = ({customeClass}:classType) => {
    return (
        <>
            <div className={`row ${customeClass}`}>
            {pricingPlan.length &&
              pricingPlan.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-9">
                  <div className="pricing-item mb-30">
                    <div className="pricing-thumb">
                      <Image
                        src={item.img}
                        alt="img not found"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                      <h3 className="title">{item.title}</h3>
                      <div className="net-speed">
                        <h5>
                          {item.net} <span> {item.speed} </span>
                        </h5>
                      </div>
                    </div>
                    <div className="pricing-content">
                      <ul className="pricing-list">
                        {item.pricingList &&
                          item.pricingList.map((i, index) => (
                            <li key={index}>
                              <Image
                                src={i.img}
                                alt="img not found"
                                style={{ width: "100%", height: "auto" }}
                              />{" "}
                              {i.list}
                            </li>
                          ))}
                      </ul>
                      <div className="price-wrap">
                        <span> {item.start} </span>
                        <h3 className="price">
                          ${item.price}
                          <sub>/{item.time}</sub>
                        </h3>
                      </div>
                      <div className="pricing-btn">
                        <Link
                          href="/checkout"
                          className="btn btn-link hover-underline"
                        >
                          Buy Plans
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
    );
};

export default PricingPlan;