"use client"

import Link from 'next/link';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import products_data from '@/data/products-data';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { productsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';

const ShopProductSlider = () => {
    const dispatch = useDispatch();
    const handleAddToCart = (product: productsType) => {
        // Dispatch the cart_product action with the selected product as the payload
        dispatch(cart_product(product));
    };

    //for rating handle
    const getRating = (rating: any) => {
        let empty_rating_count = 5 - rating;
        let ratings = [];
        for (let i = 0; i < rating; i++) {
            ratings.push(<i className="fas fa-star" key={`l-${i}`}></i>)
        }
        for (let i = 0; i < empty_rating_count; i++) {
            ratings.push(<i className="fal fa-star" key={`p-${i}`}></i>)
        }
        return ratings;
    }
    //for rating handle

    return (
        <div className="rel-products-active">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                loop={false}
                breakpoints={{
                    320: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }}
            >
                {products_data && products_data.slice(0, 6).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="shop-item text-center">
                            {item.sale && <span className="fresh-sale">{item.sale}</span>}
                            <div className="shop-thumb">
                                <Link href={`/shop-details/${item.id}`}><Image src={item.img} style={{ width: "100%", height: "auto" }} alt="img not found" /></Link>
                            </div>
                            <div className="shop-item-content">
                                <h6 className="title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h6>
                                <h3 className="price">
                                    <span><sup>$</sup>{item.price}</span>
                                    {item.oldPrice && <del><sup>$</sup>{item.oldPrice}</del>}
                                </h3>
                                <div className="shop-rating">
                                    {getRating(item?.rating)}
                                </div>
                                <button onClick={() => handleAddToCart(item)} type='button' className="btn">{item.btn}</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ShopProductSlider;