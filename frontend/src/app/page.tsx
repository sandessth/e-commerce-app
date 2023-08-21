"use client";

import React from "react";
// import Header from "./components/layout/header";
// import Header1 from "./components/layout/header1";
// import ProductList from "./components/layout/product-list";
import ProductList1 from "./components/layout/product-list1"; 
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import Filters from "./components/layout/filters";
// import { getProductsData } from "./lib/fetch-data";

function Home() {
  
  // const productsData = await getProductsData()
  // console.log(productsData)
  // console.log("asds")
  return (
    <>
      
      {/* <Header/> */}
      
      <ProductList1/>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
      {/* <ProductList/>   */}

    </>
  );
}

export default Home;

