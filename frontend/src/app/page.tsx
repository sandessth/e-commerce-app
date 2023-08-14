import React from "react";
import Header from "./components/layout/header";
import Header1 from "./components/layout/header1";
import ProductList from "./components/layout/product-list";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Header1/>
      <ProductList/><ProductList/><ProductList/><ProductList/>
    </>
  );
}

export default Home;

// json-server db.json -m ./node_modules/json-server-auth
