import React from 'react';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BrandSection from '../front/BrandSection';
import Link from 'next/link';

const ThankYouMain = () => {
    return (
        <>
            <Breadcrumb title="Thank You" subTitle="Thank You" />
            <section className="bd-success-area p-relative theme-bg-2 pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="bd-sucess-main">
                                <div className="bd-sucess-thanks">
                                    <div className="bd-section__title-wrapper text-center">
                                        <i className="far fa-check"></i>
                                        <h2 className="bd-section__title">Thank You For Your purchase! </h2>
                                        <p className="bd-section__subtitle">your purchase has been recived</p>
                                    </div>
                                    <div className="bd-sucess-thanks-info">
                                        <ul>
                                            <li>
                                                <span><strong>Customer Name :</strong></span>
                                                <span>Steve Smith</span>
                                            </li>
                                            <li>
                                                <span><strong>Mobile No :</strong></span>
                                                <span>(406) 555-0120</span>
                                            </li>
                                            <li>
                                                <span><strong>Product :</strong></span>
                                                <span>Netfix Band Whole Home Mesh Wi-Fi System Router</span>
                                            </li>
                                            <li>
                                                <span><strong>Payment Amount :</strong></span>
                                                <span>$75</span>
                                            </li>
                                            <li>
                                                <span><strong>Transactions ID :</strong></span>
                                                <span>CDFF123476359</span>
                                            </li>
                                            <li>
                                                <span><strong>Date :</strong></span>
                                                <span>22-12-2023</span>
                                            </li>
                                            <li>
                                                <span><strong>Mode of Payment :</strong></span>
                                                <span>Credit Card</span>
                                            </li>
                                            <li>
                                                <span><strong>Transaction Status :</strong></span>
                                                <span>Success</span>
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                            <Link href="/shop" className='btn transparent-btn'>
                                                Make another purchase
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BrandSection paddingClass="ptt-0" />
        </>
    );
};

export default ThankYouMain;