"use client";
import { useGetProductQuery } from "@/redux/features(slices)/products/productsApi";
import { useParams } from "next/navigation";
import React from "react";

function ProductDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery(id);
  console.log(data);
  return <div>sdf</div>;
}

export default ProductDetailPage;
