"use client";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { useParams } from "next/navigation";
import React from "react";

function SearchResult() {
  const { key } = useParams();
  console.log(key);
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  return <div>SearchResult</div>;
}

export default SearchResult;
