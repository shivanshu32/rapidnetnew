import Link from 'next/link';
import React from 'react';

const HeaderTopBar = () => {
    return (
        <div className="header-top-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-7 col-sm-7">
                        <div className="header-top-left">
                            <ul>
                                <li className="d-none d-xl-flex"><i className="flaticon-location"></i> Plot-22, Shakti Khand-2, Indrapuram, Ghaziabad, UP-201014, India</li>
                                <li className="d-none d-lg-flex"><i className="flaticon-email"></i> corp.Sales@RapidNetWorld.Com</li>
                                {/* <li><i className="flaticon-clock"></i> Opening Time : 10: AM - 10 PM</li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-5 col-sm-5">
                        <div className="header-top-right">
                            <ul>
                                {/* <li className="header-user-info">
                                    <i className="flaticon-businessman"></i>
                                    <Link href="/signin">Login / Register</Link>
                                </li> */}
                                <li className="header-social">
                                    <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                    <Link href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                    <Link href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopBar;