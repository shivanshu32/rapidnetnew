"use client"
import products_data from '@/data/products-data';
import { productsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';

const ShopSection = () => {
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
        <div className="row">
            {products_data && products_data.slice(0, 6).map((item) => (
                <div className="col-xl-4 col-md-6" key={item.id}>
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
                </div>
            ))}
        </div>
    );
};

export default ShopSection;