"use client";

import { useGetCategoryQuery } from "@/redux/features(slices)/category/catApi";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { useRouter } from "next/navigation";
import React from "react";

function Category() {
  const { data, error, isLoading } = useGetCategoryQuery();
  const router = useRouter();
  // const { data1, error1, isLoading1 } = useGetAllProductsQuery();
  // console.log(data1);
  const HandleCat = (category: string) => {
    // console.log(data);
    router.push(`/category/${category}`);
  };

  return (
    <div>
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="d"
        data-dropdown-trigger="hover"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Category{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="d"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        {data?.map((category) => (
          <div onClick={() => HandleCat(category)}>
            <ul
              className="py-2 text-sm hover:bg-gray-100"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <button className="block px-4 py-2 ">{category}</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
