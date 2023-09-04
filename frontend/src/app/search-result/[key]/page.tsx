"use client";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { useParams } from "next/navigation";
import React from "react";

function SearchResult() {
  const { key } = useParams();
  console.log(key);
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  let filteredData = [];

  if (isLoading) {
    console.log("Loading data...");
  } else if (error) {
    console.error("Error fetching data:", error);
  } else if (data) {
    filteredData = data.filter((item) => item.name.includes(key)) || [];
    console.log(filteredData);
  }

  return <div>SearchResult</div>;
}

export default SearchResult;
