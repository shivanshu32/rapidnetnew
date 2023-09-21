"use client"

import React, { useState } from 'react';

const CheckoutCoupon = () => {
    const [isActive, setActive] = useState<boolean>(false);
    const [isActiveA, setActiveA] = useState<boolean>(false);

    const handleToggle = (): void => {
        setActive(!isActive);
    };
    const handleToggleA = (): void => {
        setActiveA(!isActiveA);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <section className="coupon-area pt-110 pb-30">
            <div className="container container-small">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            <h3><i className="fas fa-folder"></i> Returning customer? <span id="showlogin" onClick={handleToggle}>Click here to login</span></h3>
                            <div id="checkout-login" className={`coupon-content ${isActive ? "d-block" : "d-none"}`}>
                                <div className="coupon-info">
                                    <div className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                                        sed est sit amet ipsum luctus.</div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-row-first">
                                            <label>
                                                Username or email <span className="required">*</span>
                                            </label>
                                            <input type="text" placeholder='Username or email' />
                                        </div>
                                        <div className="form-row-last">
                                            <label>
                                                Password <span className="required">*</span>
                                            </label>
                                            <input type="text" placeholder='Password' />
                                        </div>
                                        <div className="form-row">
                                            <button className="btn" type="submit">
                                                Login
                                            </button>
                                            <label>
                                                <input type="checkbox" />
                                                Remember me
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="coupon-accordion">
                            <h3><i className="fas fa-folder"></i> Have a coupon? <span id="showcoupon" onClick={handleToggleA}>Click here to enter your code</span></h3>
                            <div id="checkout_coupon" className={`coupon-checkout-content ${isActiveA ? "d-block" : "d-none"}`}>
                                <div className="coupon-info">
                                    <form onSubmit={handleSubmit}>
                                        <div className="checkout-coupon">
                                            <input type="text" placeholder="Coupon Code" />
                                            <button className="btn" type="submit">Apply Coupon</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutCoupon;