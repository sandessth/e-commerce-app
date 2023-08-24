"use client";

import React from "react";
import ProductList1 from "./components/layout/product-list1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FreeShippingADV from "./components/layout/advertisement-free-shipping";

function Home() {
  return (
    <>
      <FreeShippingADV />
      <ProductList1 />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      {/* <ProductList/>   */}
    </>
  );
}

export default Home;
