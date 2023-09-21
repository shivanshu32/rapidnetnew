"use client"

import React, { useState } from 'react';
import NiceSelect from '../common/NiceSelect';
import CheckoutForm from './CheckoutForm';
import OrderSidebar from './OrderSidebar';
import CheckoutCoupon from './CheckoutCoupon';

const CheckoutSection = () => {
    const [isActiveC, setActiveC] = useState<boolean>(false);

    const handleToggleC = (): void => {
        setActiveC(!isActiveC);
    };

    const handleSubmit = (event: any) => {
        event.preventDefualt();
    };
    const selectHandler = (e: any) => { };
    return (
        <>
            <CheckoutCoupon />
            <section className="checkout-area pb-15">
                <div className="container container-small">
                    <form onSubmit={handleSubmit} action="#">
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3 className='mb-30'>Billing Details</h3>
                                    <CheckoutForm />
                                    <div className="different-address">
                                        <div className="ship-different-title">
                                            <label htmlFor="ship-box">
                                                Ship to a different address?
                                            </label>
                                            <input onClick={handleToggleC} id="ship-box" type="checkbox" />
                                        </div>
                                        <div
                                            id="ship-box-info"
                                            className={`${isActiveC ? "d-block" : "d-none"}`}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="country-select">
                                                        <label>
                                                            Country <span className="required">*</span>
                                                        </label>
                                                        <NiceSelect
                                                            options={[
                                                                {id: 1, option: "Bangladesh"},
                                                                {id: 2, option: "Algeria"},
                                                                {id: 3, option: "Afghanistan"},
                                                                {id: 4, option: "Ghana"},
                                                                {id: 5, option: "Albania"},
                                                                {id: 6, option: "Bahrain"},
                                                                {id: 7, option: "Colombia"},
                                                                {id: 8, option: "Dominican Republic"}
                                                            ]}
                                                            defaultCurrent={0}
                                                            onChange={selectHandler}
                                                            name="Select Subject"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            First Name <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Last Name <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>Company Name</label>
                                                        <input type="text" placeholder="Company Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Address <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Street address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <input
                                                            type="text"
                                                            placeholder="Apartment, suite, unit etc. (optional)"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Town / City <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Town / City" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            State / County <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="State / County" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Postcode / Zip <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Postcode / Zip" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Email Address <span className="required">*</span>
                                                        </label>
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="checkout-form-list">
                                                        <label>
                                                            Phone <span className="required">*</span>
                                                        </label>
                                                        <input type="text" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea
                                                    id="checkout-mess"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <OrderSidebar />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutSection;