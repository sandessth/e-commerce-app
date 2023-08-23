"use client";

import {
  decreaseItem,
  getTotal,
  increaseItem,
  removeFromCart,
} from "@/redux/features(slices)/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import Link from "next/link";
import React, { useEffect } from "react";
import { BiArrowBack } from "react-icons/Bi";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import WishList from "./wishlist/wishlist";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleIncreaseItem = (cartItem) => {
    dispatch(increaseItem(cartItem));
  };

  const handleDecreaseItem = (cartItem) => {
    dispatch(decreaseItem(cartItem));
  };

  return (
    <>
      <div className="min-h-screen">
        {/* <div className="text-center text-2xl m-3">Your cart</div> */}
        {cart.cartItems.length === 0 ? (
          <>
            <Link
              href="/"
              className=" text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
            >
              <div className="text-center text-md m-3 text-gray-500">
                Your cart is currently empty.
              </div>
              <div className="flex justify-center m-3 items-center text-gray-500 hover:text-gray-900">
                <BiArrowBack /> Start Shopping
              </div>
            </Link>
          </>
        ) : (
          <div>
            <div>
              <section className="mt-2 py-2 bg-blue-100">
                <div className="container max-w-screen-xl mx-auto px-4">
                  <h2 className="flex justify-center items-center text-xl my-2">
                    Currently&nbsp;
                    <p className="text-green-600">{cart.cartTotalQuantity} </p>
                    &nbsp;items in your cart
                  </h2>
                </div>
              </section>

              <section className="py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <main className="md:w-3/4">
                      <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                        {cart.cartItems?.map((cartItem) => (
                          <div>
                            <div className="flex flex-wrap lg:flex-row gap-5 mb-4 items-center">
                              <div className="w-full lg:w-3/7 xl:w-2/4">
                                <figure className="flex leading-5">
                                  <div>
                                    <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                      <img src={cartItem.image} alt="Title" />
                                    </div>
                                  </div>
                                  <figcaption className="ml-3">
                                    <p>
                                      <a
                                        href="#"
                                        className="hover:text-blue-600"
                                      >
                                        {cartItem.name}
                                      </a>
                                    </p>
                                    <p className="mt-1 text-gray-400">
                                      {" "}
                                      Color: {cartItem.color}
                                    </p>
                                    <p className="mt-1 text-gray-400">
                                      {" "}
                                      Model: {cartItem.Model}
                                    </p>
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="w-24">
                                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                  <button
                                    data-action="decrement"
                                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                                    onClick={() => handleDecreaseItem(cartItem)}
                                  >
                                    <span className="m-auto text-2xl font-thin">
                                      −
                                    </span>
                                  </button>
                                  <div className="flex justify-center items-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-900 custom-input-number">
                                    {cartItem.cartQuantity}
                                  </div>
                                  <button
                                    onClick={() => handleIncreaseItem(cartItem)}
                                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                                  >
                                    <span className="m-auto text-2xl font-thin">
                                      +
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div>
                                <div className="leading-5">
                                  <p className="font-semibold not-italic">
                                    ${cartItem.price * cartItem.cartQuantity}
                                  </p>
                                  <small className="text-gray-400">
                                    ${cartItem.price} per product
                                  </small>
                                </div>
                              </div>
                              <div className="flex-auto">
                                <div className="float-right">
                                  <button
                                    className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                                    onClick={() =>
                                      handleRemoveFromCart(cartItem)
                                    }
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <hr className="my-4" />
                          </div>
                        ))}
                      </article>
                    </main>
                    <aside className="md:w-1/4">
                      <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                        <ul className="mb-5">
                          <li className="flex justify-between text-gray-600  mb-1">
                            <span>Total Units:</span>
                            <span className="text-green-500">
                              {cart.cartTotalQuantity}{" "}
                            </span>
                          </li>
                          <li className="flex justify-between text-gray-600  mb-1">
                            <span>SubTotal:</span>
                            <span>${cart.cartTotalAmount}</span>
                          </li>

                          <li className="flex justify-between text-gray-600  mb-1">
                            <span>TAX:</span>
                            <span>${cart.cartTotalTax.toFixed(2)}</span>
                          </li>
                          <li className="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                            <span>Total price:</span>
                            <span>
                              ${cart.cartTotalAmount + cart.cartTotalTax}
                            </span>
                          </li>
                        </ul>

                        <a className="px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                          Continue
                        </a>

                        <Link
                          href="/"
                          className="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100"
                        >
                          Back to shop
                        </Link>
                      </article>
                    </aside>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
      <WishList />
      <ToastContainer />
    </>
  );
};

export default Cart;
