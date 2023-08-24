// import { useGetAllwishlistQuery } from "@/redux/features(slices)/wishlist/wishlistApi";
import { useAppSelector } from "@/redux/store/hooks";
import React from "react";

function WishList() {
  const list = useAppSelector((state) => state.wishList);
  console.log(list);

  return (
    <div className="m-4">
      <section className="py-2 bg-blue-100 mb-4">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h2 className="flex justify-center items-center text-xl my-2">
            Your Wishlist
          </h2>
        </div>
      </section>
      {list.wishList?.map((item) => (
        <div>
          <div className="flex flex-wrap lg:flex-row gap-5 mb-4 items-center">
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
                  // onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
}

export default WishList;
