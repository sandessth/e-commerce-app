
"use client"
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";

function ProductList1 (){
    const {data, error, isLoading} = useGetAllProductsQuery()
    console.log(data)
    
    return isLoading ? (
        <div>Loading...</div>
    ) : error ? (
        <div className="flex justify-center text-2xl m-2 mt-4">error loading</div>
    ) : ( 
        <div className="grid grid-cols-4">
            <div className="col-span-1">
            {data.map((products) =>((products.name)))}
        
        </div>
        </div>
    )
    
}

export default ProductList1 