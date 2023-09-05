"use client";
import { useGetProductQuery } from "@/redux/features(slices)/products/productsApi";
import { useParams } from "next/navigation";
import React from "react";

function ProductDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  } else if (data) {
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Price: ${data.price}</p>
        <p>Model: {data.model}</p>
      </div>
    );
  }
}

export default ProductDetailPage;
