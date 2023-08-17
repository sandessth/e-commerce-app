import React from "react";
import Header from "./components/layout/header";
import Header1 from "./components/layout/header1";
import ProductList from "./components/layout/product-list";
// import Filters from "./components/layout/filters";
// import { getProductsData } from "./lib/fetch-data";

async function Home() {
  
  // const productsData = await getProductsData()
  // console.log(productsData)
  // console.log("asds")
  return (
    <>
      
      {/* <Header/> */}
      <ProductList/>
    </>
  );
}

export default Home;

