"use client";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartSection = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
    0
  );

  const handleChange = () => {};

  return (
    <>
      {cartProducts.length === 0 && (
        <div className="container">
          <div className="empty-text pt-100 pb-60 text-center">
            <h3>Your cart is empty</h3>
          </div>
        </div>
      )}
      {cartProducts.length >= 1 && (
        <section className="cart-area pt-120 pb-60">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-12">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts?.map((item, index) => {
                        const productPrice = (item.price ?? 0) * (item.quantity ?? 0);

                        return (
                          <tr key={index}>
                            <td className="product-thumbnail">
                              <Link href={`/shop-details/${item.id}`}>
                                <Image
                                  src={item.img}
                                  style={{ width: "auto", height: "auto" }}
                                  alt="img"
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link className="cart_product_title" href={`/shop-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </td>
                            <td className="product-price">
                              <span className="amount">${item.price}</span>
                            </td>
                            <td className="product-quantity text-center">
                              <div className="product-quantity mt-10 mb-10">
                                <div className="product-quantity-form">
                                  <form
                                    onSubmit={(e) => e.preventDefault()}
                                  >
                                    <button
                                      onClick={() =>
                                        dispatch(decrease_quantity(item))
                                      }
                                      className="cart-minus"
                                    >
                                      <i className="far fa-minus"></i>
                                    </button>
                                    <input
                                      className="cart-input"
                                      type="text"
                                      onChange={handleChange}
                                      value={item?.quantity}
                                    />
                                    <button
                                      onClick={() =>
                                        dispatch(cart_product(item))
                                      }
                                      className="cart-plus"
                                    >
                                      <i className="far fa-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </td>
                            <td className="product-subtotal">
                              <span className="amount">${productPrice}</span>
                            </td>
                            <td
                              className="product-remove"
                            >
                              <button className="custom_btn" type="button" onClick={() =>
                                dispatch(remove_cart_product(item))
                              }>
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon d-flex align-items-center">
                        <input
                          id="coupon_code"
                          className="input-text"
                          name="coupon_code"
                          placeholder="Coupon code"
                          type="text"
                        />
                        <button
                          className="btn light-btn"
                          name="apply_coupon"
                          type="submit"
                        >
                          Apply coupon
                        </button>
                      </div>
                      <div className="coupon2">
                        <button
                          className="btn light-btn"
                          name="update_cart"
                          type="submit"
                          onClick={() => dispatch(clear_cart())}
                        >
                          Clear cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>
                          Subtotal <span>${totalPrice}</span>
                        </li>
                        <li>
                          Total <span>${totalPrice}</span>
                        </li>
                      </ul>
                      <div className="text-end">
                        <Link className="btn transparent-btn" href="/checkout">
                          Proceed to checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartSection;
