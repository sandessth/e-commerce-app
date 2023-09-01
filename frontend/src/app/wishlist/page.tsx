"use client";

// import { useGetAllwishlistQuery } from "@/redux/features(slices)/wishlist/wishlistApi";
import { addToCart } from "@/redux/features(slices)/cart/cartSlice";
import {
  addToWishList,
  removeFromWishList,
} from "@/redux/features(slices)/wishlist/wishListSlice";
import { useAppSelector } from "@/redux/store/hooks";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function WishList() {
  const list = useAppSelector((state) => state.wishList);
  console.log(list);
  const dispatch = useDispatch();

  const handleRemoveFromWishList = (item) => {
    dispatch(removeFromWishList(item));
  };

  const HandleAddToCart = (item) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addToCart(item));
      dispatch(removeFromWishList(item));
    } else {
      toast.error("Please signin to add products to cart.");
    }
  };

  return (
    <div>
      <section className="mt-2 py-2 bg-blue-100">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="flex justify-center items-center text-xl my-2">
            Currently&nbsp;
            <p className="text-green-600">sdfsdf </p>
            &nbsp;items in your wishlist
          </h2>
        </div>
      </section>
      {list.wishList.length === 0 ? (
        <>
          <Link
            href="/"
            className=" text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
          >
            <div className="text-center text-md m-3 text-gray-500 mb-24 h-screen">
              You wishlist is empty.
            </div>
            {/* <div className="flex justify-center m-3 items-center text-gray-500 hover:text-gray-900">
                <BiArrowBack /> Start Shopping
              </div> */}
          </Link>
        </>
      ) : (
        <div className="py-10">
          {list.wishList?.map((item) => (
            <div className="flex justify-center">
              <div className="w-2/3 flex flex-wrap lg:flex-row gap-5 mb-4 items-center">
                <div className="w-full lg:w-3/7 xl:w-2/4">
                  <figure className="flex leading-5">
                    <div>
                      <div className="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                        <img src={item.image} alt="Title" />
                      </div>
                    </div>
                    <figcaption className="ml-3">
                      <p>
                        <a href="#" className="hover:text-blue-600">
                          {item.name}
                        </a>
                      </p>
                      <p className="mt-1 text-gray-400"> Color: {item.color}</p>
                      <p className="mt-1 text-gray-400"> Model: {item.Model}</p>
                    </figcaption>
                  </figure>
                </div>

                <div>
                  <div className="leading-5">
                    <p className="font-semibold not-italic">
                      ${item.price} per product
                    </p>
                  </div>
                </div>
                <div className="flex-auto">
                  <div className="float-right">
                    <button
                      className="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleRemoveFromWishList(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div
                  className="text-slate-900/80 text-white hover:backdrop-lg group relative border border-black/10 px-2 py-2 rounded-lg bg-blue-600"
                  onClick={() => HandleAddToCart(item)}
                >
                  <button className="flex justify-center items-center gap-2">
                    Add to cart
                    {/* <BsCart /> */}
                  </button>
                  {/* <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                    Add to Cart
                  </div> */}
                </div>
              </div>

              <hr className="my-4" />
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default WishList;
