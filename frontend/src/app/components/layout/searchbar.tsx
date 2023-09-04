"use client";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
  const [key, setKey] = useState("");
  const { data, error, isLoading } = useGetAllProductsQuery();
  // console.log(data);
  const router = useRouter();
  // const filteredProducts = data.filter((product) =>
  //   product.name.toLowerCase().includes(key.toLowerCase())
  // );

  const HandleSearch = (key: string) => {
    console.log(key);
    router.push(`/search-result/${key}`);
  };

  return (
    <div>
      <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 mx-auto md:mt-0 md:w-2/4 lg:w-2/4">
        <input
          className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
          type="text"
          placeholder="Enter your keyword"
          required
          id="key"
          name="search-key"
          value={key}
          onChange={(event) => setKey(event.target.value)}
        />
        <button
          type="button"
          className="px-4 py-2 inline-block text-white border border-transparent bg-blue-700 text-white rounded-md hover:bg-blue-800"
          onClick={() => HandleSearch(key)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
