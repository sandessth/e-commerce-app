"use client";
import React from "react";

function Checkout() {
  return (
    <div>
      <div className="text-center my-5 text-xl text-blue-700">
        {" "}
        Enter delivery address:{" "}
      </div>
      <main className="flex justify-center drop-shadow-lg drop-shadow-lg dark:bg-dark my-5 ">
        <div className="flex justify-center ">
          <div className="w-1/2 border-2 border-gray-900/10 rounded-lg dark:bg-gray-800 p-8 ">
            <form>
              {/* <div className="space-y-12"> */}
              <div className=" pb-6">
                <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Country (Disabled option)
                    </label>
                    <div className="mt-2">
                      <select
                        // value={country}
                        // onChange={(event) => setCountry(event.target.value)}
                        id="country"
                        name="country"
                        className="block w-full px-1 dark:bg-slate-200/20 dark:text-slate-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        // disabled
                      >
                        {/* {Country.map((item) => (
                          <option key={item.text}>{item.text}</option>
                        ))} */}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      State
                    </label>
                    <div className="mt-2">
                      <select
                        // value={state}
                        // onChange={(event) => setState(event.target.value)}
                        id="state"
                        name="state"
                        className="block w-full px-1 dark:bg-slate-200/20 dark:text-slate-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        {/* {State.map((item) => (
                          <option key={item.text}>{item.text}</option>
                        ))} */}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-5">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      Street Address
                    </label>
                    <div className="mt-2">
                      <input
                        // value={street}
                        // onChange={(event) => setStreet(event.target.value)}
                        type="text"
                        name="street-address"
                        id="street-address"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        // value={city}
                        // onChange={(event) => setCity(event.target.value)}
                        type="text"
                        name="city"
                        id="city"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100">
                      ZIP
                    </label>
                    <div className="mt-2">
                      <input
                        // value={zip}
                        // onChange={(event) => setZip(event.target.value)}
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        className="block dark:bg-slate-200/20 dark:text-slate-100 px-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* </div> */}
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  // onClick={handleCancel}
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={handleSubmit}
                  className="rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
