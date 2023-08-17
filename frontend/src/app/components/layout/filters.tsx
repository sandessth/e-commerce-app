import { getProductsData } from "@/app/lib/fetch-data";
import React from "react";
// import StarRatings from "react-star-ratings";

const Filters = async () => {
    const productsData = await getProductsData()

//   let queryParams;

//   function checkHandler(checkBoxType, checkBoxValue) {
//     if (typeof window !== "undefined") {
//       queryParams = new URLSearchParams(window.location.search);
//     }

//     if (typeof window !== "undefined") {
//       const value = queryParams.get(checkBoxType);
//       if (checkBoxValue === value) return true;
//       return false;
//     }
//   }

  return (
    <div className="md:w-2/3 px-4 mt-5">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Price ($)</h3>
        <div className="grid md:grid-cols-3 gap-x-2">
          <div className="mb-4">
            <input
              name="min"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Min"
            />
          </div>

          <div className="mb-4">
            <input
              name="max"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Max"
            />
          </div>

          <div className="mb-4">
            <button className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Category</h3>

        <ul className="space-y-1">
        {productsData.items.map((item: any) => {
            return (
                <div key={productsData.sys.id}>
                <li>
                <label className="flex items-center">
                <input
                name="category"
                type="checkbox"
                value={item.fields.category}
                className="h-4 w-4"
                // defaultChecked={checkHandler("category", "Electronics")}
              />
              <span className="ml-2 text-gray-500"> {item.fields.category} </span>
            </label>
          </li>
          
                </div>
            )
        })}
        
          
        </ul>

        {/* <hr className="my-4" />

        <h3 className="font-semibold mb-2">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                />
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Filters;