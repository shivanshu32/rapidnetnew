"use client";

import { RootState } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const OrderSidebar = () => {
    const [withShiping, setWithShiping ] = useState(0)
    const cartProducts = useSelector(
      (state: RootState) => state.cart.cartProducts
    );
    const totalPrice = cartProducts.reduce(
      (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
      0
    );
    
  const shippingCost = 7;
  const handleShipping = (shippingCost:number) =>{
    setWithShiping(totalPrice + shippingCost)
  }
  const handleFreeShipping = () =>{
    setWithShiping(totalPrice)
  }
  const router = useRouter()

    return (
        <div className="col-lg-6">
            <div className="your-order mb-30 ">
                <h3>Your order</h3>
                <div className="your-order-table table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th className="product-name">Product</th>
                                <th className="product-total">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartProducts?.map((item, index) => {
                            const productPrice = (item.price ?? 0) * (item.quantity ?? 0);
                            return (
                                <tr className="cart_item" key={index}>
                                    <td className="product-name">
                                        {item?.title}
                                    </td>
                                    <td className="product-total">
                                        <span className="amount">
                                            ${productPrice}
                                        </span>
                                    </td>
                                </tr>
                            )
                           })}
                        </tbody>
                        <tfoot>
                            <tr className="cart-subtotal">
                                <th>Cart Subtotal</th>
                                <td>
                                    <span className="amount">${totalPrice}</span>
                                </td>
                            </tr>
                            <tr className="shipping">
                                <th>Shipping</th>
                                <td>
                                    <ul>
                                        <li>
                                            <input onClick={() => handleShipping(shippingCost)} type="radio" id="flatRate" name="fav_language" />
                                            <label className="ml-10" htmlFor="flatRate">
                                                Flat Rate: <span className="amount">${shippingCost}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <input onClick={() => handleFreeShipping()} type="radio" id="shipping" name="fav_language" />
                                            <label className="ml-10" htmlFor="shipping"> Free Shipping:</label>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="order-total">
                                <th>Order Total</th>
                                <td>
                                    <strong>
                                        <span className="amount"> ${withShiping > 0 ? withShiping : totalPrice} </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="checkoutOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#payment"
                                    aria-expanded="false"
                                    aria-controls="payment"
                                >
                                    Payment Info
                                </button>
                            </h2>
                            <div
                                id="payment"
                                className="accordion-collapse collapse"
                                aria-labelledby="paymentTwo"
                                data-bs-parent="#checkoutAccordion"
                            >
                                <div className="accordion-body shipping">
                                    <p>Make your payment directly into our bank account. Please use
                                    your Order ID as the payment reference.</p>
                                    <ul>
                                        <li>
                                            <input type="radio" id="Cash" name="pay_info" />
                                            <label className="ml-10" htmlFor="Cash">Credit Card</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Bank" name="pay_info" />
                                            <label className="ml-10" htmlFor="Bank">Direct Bank</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Cheque" name="pay_info" />
                                            <label className="ml-10" htmlFor="Cheque">Cheque Payment</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="Paypal" name="pay_info" />
                                            <label className="ml-10" htmlFor="Paypal">PayPal</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-button-payment mt-20">
                        <button type="button" className="btn" onClick={() => router.push('/thank-you')}>
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSidebar;