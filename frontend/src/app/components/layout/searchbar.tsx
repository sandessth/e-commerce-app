"use client";
import React, { useState } from "react";

function SearchBar() {
  const [key, setKey] = useState("");

  return (
    <div>
      <form className="flex flex-nowrap items-center w-full order-last md:order-none mt-5 mx-auto md:mt-0 md:w-2/4 lg:w-2/4">
        <input
          className="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400"
          type="text"
          placeholder="Enter your keyword"
          required
          value={key}
        />
        <button
          type="button"
          className="px-4 py-2 inline-block text-white border border-transparent bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
