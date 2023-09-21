"use client"

import dynamic from 'next/dynamic';
import products_data from '@/data/products-data';
import { idType, productsType } from '@/interFace/interFace';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ShopProductSlider from './ShopProductSlider';
import Image from 'next/image';
const ShopDetailsTab = dynamic(() => import('./ShopDetailsTab'), {
    ssr: false
})
import product_1 from '../../../public/assets/img/products/product_img02.png';
import product_2 from '../../../public/assets/img/products/product_img03.png';
import product_3 from '../../../public/assets/img/products/product_img04.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';

const ShopDetailsConent = ({ id }: idType) => {
    const [count, setCount] = useState<number | undefined>(1);
    const product = products_data.find(item => item.id == id);
    const cartProducts = useSelector((state: RootState) => state.cart.cartProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            const productInCart = cartProducts.find(item => item.id === product.id);
            setCount(productInCart?.quantity || 1);
        }
    }, [product, cartProducts]);

    const handleIncrease = (product: productsType) => {
        const newCount = (count || 0) + 1;
        setCount(newCount);
        dispatch(cart_product(product));
    };

    const handleDecrease = (product: productsType) => {
        const newCount = (count || 0) - 1;
        setCount(newCount);
        dispatch(decrease_quantity(product));
    };

    const handleAddToCart = (product: productsType) => {
        dispatch(cart_product(product));
    };

    const getRating = (rating: any) => {
        let empty_rating_count = 5 - rating;
        let ratings = [];
        for (let i = 0; i < rating; i++) {
            ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>);
        }
        for (let i = 0; i < empty_rating_count; i++) {
            ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>);
        }
        return ratings;
    };

    return (
        <>
            {
                product && <section className="shop-details-area pt-120 pb-60">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6">
                                <div className="product-d-img-tab-wrapper">
                                    <div className="product-d-img-nav">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                                                    {product?.img && <Image src={product?.img} style={{ width: "auto", height: "auto" }} alt="img not found" />}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                                                    <Image className="active" src={product_1} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                                                    <Image className="active" src={product_2} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contactA-tab" data-bs-toggle="tab" data-bs-target="#contactA-tab-pane" type="button" role="tab" aria-controls="contactA-tab-pane" aria-selected="false">
                                                    <Image className="active" src={product_3} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-d-img-tab">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                                <div className="product-d-img-single">
                                                    {product?.img && <Image src={product?.img} style={{ width: "auto", height: "auto" }} alt="img not found" />}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                                <div className="product-d-img-single">
                                                    <Image className="active" src={product_1} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                                <div className="product-d-img-single">
                                                    <Image className="active" src={product_2} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="contactA-tab-pane" role="tabpanel" aria-labelledby="contactA-tab" tabIndex={0}>
                                                <div className="product-d-img-single">
                                                    <Image className="active" src={product_3} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shop-details-content">
                                    <div className="product-stock-status">
                                        <span>In Stock</span>
                                    </div>
                                    <h2 className="title">{product?.title}</h2>
                                    <div className='shop-rating-wrap'>
                                        <div className="shop-rating">
                                            {getRating(product?.rating)}
                                        </div>
                                        <span>{product?.ratingCount} Reviews</span>
                                    </div>
                                    <h3 className="price">
                                        <span><sup>$</sup>{product?.price}</span>
                                        {product?.oldPrice && <del><sup>$</sup>{product?.oldPrice}</del>}
                                    </h3>
                                    <p>Yes! {`You'll`} be able to use your T-Mobile Home Internet to connect your computer, phone, and numerous other devices. Gauge your students’ skill level with the initial test and follow their progress.</p>
                                    <div className="shop-details-quantity">
                                        <div className="cart-plus-minus">
                                            <div className="quantity-form">
                                                <p>{count}</p>
                                                <div className="qtybutton-box">
                                                    <span className="plus" onClick={() => handleIncrease(product)}>
                                                        <i className="fas fa-caret-up"></i>
                                                    </span>
                                                    <span className="minus dis" onClick={() => handleDecrease(product)}>
                                                        <i className="fas fa-caret-down"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link href="/cart" type='button' className="btn cart-btn">{product?.btn}</Link>
                                    </div>
                                    <div className="shop-details-bottom">
                                        <ul>
                                            <li className="sd-category">
                                                <span className="title">SKU :</span> BO1D0MX8SJ
                                            </li>
                                            <li className="sd-category">
                                                <span className="title">Categories :</span> Router
                                            </li>
                                            <li className="sd-tags">
                                                <span className="title">Tags :</span>
                                                <Link href="/shop">Router,</Link>
                                                <Link href="/shop">Broadband,</Link>
                                                <Link href="/shop">Satellite TV,</Link>
                                                <Link href="/shop">Streaming</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ShopDetailsTab />
                            </div>
                        </div>
                        <div className="related-products-wrap">
                            <h2 className="related-products-title">Related Products</h2>
                            <ShopProductSlider />
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default ShopDetailsConent;