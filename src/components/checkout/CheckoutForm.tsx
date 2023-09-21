"use client"

import React, { useState } from 'react';
import NiceSelect from '../common/NiceSelect';

const CheckoutForm = () => {
    const [isActiveB, setActiveB] = useState<boolean>(false);

    const handleToggleB = (): void => {
        setActiveB(!isActiveB);
    };
    const selectHandler = (e: any) => { };
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="country-select">
                    <label>Country <span className="required">*</span></label>
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
                    <label>First Name <span className="required">*</span></label>
                    <input type="text" placeholder="First Name *" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="checkout-form-list">
                    <label>Last Name <span className="required">*</span></label>
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
                    <label>Address <span className="required">*</span></label>
                    <input type="text" placeholder="Street address" />
                </div>
            </div>
            <div className="col-md-12">
                <div className="checkout-form-list">
                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                </div>
            </div>
            <div className="col-md-12">
                <div className="checkout-form-list">
                    <label>Town / City <span className="required">*</span></label>
                    <input type="text" placeholder="Town / City" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="checkout-form-list">
                    <label>State / County <span className="required">*</span></label>
                    <input type="text" placeholder="State / County" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="checkout-form-list">
                    <label>Postcode / Zip <span className="required">*</span></label>
                    <input type="text" placeholder="Postcode / Zip" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="checkout-form-list">
                    <label>Email Address <span className="required">*</span></label>
                    <input type="email" placeholder="Email Address" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="checkout-form-list">
                    <label>Phone <span className="required">*</span></label>
                    <input type="text" placeholder="Phone" />
                </div>
            </div>
            <div className="col-md-12">
                <div className="checkout-form-list create-acc">
                    <input onClick={handleToggleB} id="cbox" type="checkbox" />
                    <label htmlFor='cbox'>Create an account?</label>
                </div>
                <div id="cbox_info" className={`checkout-form-list create-account ${isActiveB ? "d-block" : "d-none"}`}>
                    <p>Create an account by entering the information below. If you are a
                        returning
                        customer please login at the top of the page.</p>
                    <label>Account password <span className="required">*</span></label>
                    <input type="password" placeholder="password" />
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;