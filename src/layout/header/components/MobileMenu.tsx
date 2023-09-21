import React, { useState } from 'react';
import Link from 'next/link';

interface classType {
    setMenuOpen: any;
    menuOpen: any;
}

const MobileMenu = ({ setMenuOpen, menuOpen }: classType) => {

    const [home, setHome] = useState(false)
    const [courses, setcourses] = useState(false)
    const [blog, setBlog] = useState(false)
    const [pages, setPages] = useState(false)

    const openMobileMenu = (menu: any) => {

        if (menu == 'home') {
            setHome(!home)
            setcourses(false)
            setBlog(false)
            setPages(false)
        }
        else if (menu == 'courses') {
            setHome(false)
            setcourses(!courses)
            setBlog(false)
            setPages(false)
        }
        else if (menu == 'blog') {
            setHome(false)
            setcourses(false)
            setBlog(!blog)
            setPages(false)
        }
        else if (menu == 'pages') {
            setHome(false)
            setcourses(false)
            setBlog(false)
            setPages(!pages)
        }
    };

    return (
        <div className="fix">
            <div className={menuOpen ? "side-info info-open" : "side-info"}>
                <button className="side-info-close" onClick={() => setMenuOpen(false)}><i className="fal fa-times"></i></button>
                <div className="side-info-content">
                    <div className="mm-menu">
                        <ul>
                            <li className={home ? "has-droupdown active" : "has-droupdown"}>
                                <a className='cursor-pointer' onClick={() => { openMobileMenu('home'); }}>Home</a>
                                <ul className={home ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/">Home Style 1</Link></li>
                                    <li><Link href="/home-two">Home Style 2</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/about">About</Link></li>
                            <li className={courses ? "has-droupdown active" : "has-droupdown"}>
                                <a className='cursor-pointer' onClick={() => { openMobileMenu('courses'); }}>Services</a>
                                <ul className={courses ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/service-details">Services Details</Link></li>
                                </ul>
                            </li>
                            <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                                <a className='cursor-pointer' onClick={() => { openMobileMenu('blog'); }}>Blogs</a>
                                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/blogs">Blog</Link></li>
                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                </ul>
                            </li>
                            <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                                <a className='cursor-pointer' onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                                    <li><Link href="/pricing">Pricing</Link></li>
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/faq">Faq</Link></li>
                                    <li><Link href="/shop">Our Shop</Link></li>
                                    <li><Link href="/shop-details">Shop Details</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>
                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                    <li><Link href="/checkout">Checkout</Link></li>
                                    <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/refund-policy">Refund Policy</Link></li>
                                    <li><Link href="/signin">Sign In</Link></li>
                                    <li><Link href="/signup">Sign Up</Link></li>
                                    <li><Link href="/error">Error page</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-infos mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><i className="flaticon-location"></i> broklyn street road, New York</li>
                                <li><i className="flaticon-email"></i> info@example.com</li>
                                <li><i className="flaticon-clock"></i> Opening Time : 10: AM - 10 PM</li>
                            </ul>
                            <div className="sidebar__menu--social">
                                <Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="https://twitter.com/"><i className="fab fa-twitter"></i></Link>
                                <Link href="https://www.instagram.com/"><i className="fab fa-instagram"></i></Link>
                                <Link href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;