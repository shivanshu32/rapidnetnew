import React from 'react';
import bgImg from "../../../public/assets/img/bg/queries_bg.jpg"
const FaqCta = () => {
    return (
        <section className="queries-area" style={{ backgroundImage:`url(${bgImg.src})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-title text-center white-title mb-50">
                            <h2 className="title">Check ability to connect our services in your area</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="queries-form">
                            <form action="#">
                                <div className="row">
                                    <div className="col">
                                        <div className="form-grp">
                                            <input type="text" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-grp">
                                            <input type="number" placeholder="Pincode"/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-grp">
                                            <input type="number" placeholder="Mobile No."/>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-grp text-end">
                                            <button className="btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqCta;