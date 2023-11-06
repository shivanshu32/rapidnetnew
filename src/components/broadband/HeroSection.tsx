import Link from "next/link";
import React from "react";
const HeroSection: React.FC = () => {
  return (
    <section className="banner-area banner-bg" style={{ backgroundImage: `url(${'/assets/img/slider/slider_bg01.jpg'})` }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6 col-md-9">
            <div className="banner-content">
              <h1 className="title wow fadeInUp" data-wow-delay=".2s" style={{color:'white'}} >Get High Speed Business Internet With RapidNet</h1>
              <p className="wow fadeInUp" data-wow-delay=".4s" style={{color:'white'}}>RapidNet Is One Of The Best Internet Service Provider in India</p>
              <div className="banner-price wow fadeInUp" data-wow-delay=".6s">
                {/* <h3 className="price">$25.00<sub>/Month</sub></h3> */}
              </div>
              {/* <Link href="/pricing" className="btn wow fadeInUp">Get Started</Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="banner-phone">
        <div className="icon">
          <i className="fal fa-mobile-android"></i>
        </div>
        <div className="content">
          <span>Customer Service:</span>
          <h5 className="number"><a href="tel:872670780">+91 9311380931</a></h5>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
