"use client";
import { useGetProductQuery } from "@/redux/features(slices)/products/productsApi";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "@/redux/features(slices)/cart/cartSlice";

function ProductDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  const dispatch = useDispatch();
  console.log(data);

  const HandleAddToCart = (products) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addToCart(products));
    } else {
      toast.error("Please signin to add products to cart.");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  } else if (data) {
    return (
      <div className="h-screen">
        <div>
          <section className="my-5">
            <div>
              <div className="flex justify-center flex-col md:flex-row ">
                <main className="md:w-2/3 lg:w-3/4 px-3">
                  <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded">
                    <div>
                      <div className="flex justify-center p-3">
                        <div
                          className="flex md:justify-center"
                          style={{
                            position: "relative",
                          }}
                        >
                          <img
                            src={data.image}
                            alt="product name"
                            height="200"
                            width="240"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="p-4">
                          <Link href={`/`} className="hover:text-blue-600">
                            {data.name}
                          </Link>
                          <div className="flex flex-wrap items-center mb-2">
                            <div className="ratings"></div>
                            <span className="mt-2 text-yellow-500">
                              <Rating
                                name="size-small"
                                defaultValue={data.rating}
                                size="small"
                                readOnly
                              />
                            </span>
                          </div>
                          <p className="text-gray-500 mb-2">
                            {data.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <div className=" m-auto">
                          <span className="text-xl font-semibold text-black p-4">
                            $ {data.price}
                          </span>

                          <p className="text-green-500 flex pl-4">
                            Free Shipping
                          </p>
                          <div
                            className="my-3 flex pl-4"
                            onClick={() => HandleAddToCart(data)}
                          >
                            <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                              {" "}
                              Add to Cart{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </div>
    );
  }
}

export default ProductDetailPage;
