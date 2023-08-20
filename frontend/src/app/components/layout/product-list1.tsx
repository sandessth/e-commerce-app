
"use client"
import { addToCart } from "@/redux/features(slices)/cart/cartSlice";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { useAppDispatch } from "@/redux/store/hooks";
import Link from "next/link";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";
import { useDispatch } from "react-redux";

function ProductList1 (){
    const {data, error, isLoading} = useGetAllProductsQuery()
    console.log(data)
    const dispatch = useDispatch()

    const HandleAddToCart = (products) => {
        dispatch(addToCart(products))
    }
    
    return isLoading ? (
        <div>Loading...</div>
    ) : error ? (
        <div className="flex justify-center text-2xl m-2 mt-4">error loading</div>
    ) : ( 
        <>
        <div className="text-2xl flex justify-center m-3">Featured Products</div>
        <div className="grid grid-cols-4 gap-2 m-4">
            
            
            {data?.map((products) => 
            <div key={products.id} className="mt-3 border border-black/20 rounded-lg"> 
                <div >
                    <span className="text-xl flex justify-center mt-3 mb-2">{products.name}</span>
                    <div className="text-sm flex justify-center text-slate-500 mb-2">
                    <span>{products.color}  |</span><span>|  {products.Model}</span>
                    </div>
                </div>
                <img src={products.image} alt={products.name} className="p-5"/>
                <div className="mx-5 mt-5 text-lg">${products.price}</div>
                <div className="text-sm mx-5 text-green-500">Free Shipping</div>
                <div className="mx-5 my-2 flex justify-between items-center">
                    <Link href="/"
                className="text-slate-900/80 text-xl text-white hover:backdrop-lg group relative border border-black/10 px-20 py-2 rounded-lg bg-blue-600"
                onClick={() => HandleAddToCart(products)}
              >
                <BsCart />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Add to Cart
                </div>
              </Link>
                <Link
                href="/"
                className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
                
              >
                <FiHeart />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Add to Wishlist
                </div>
              </Link>  </div>  
            </div>
            )}
            <div className="col-span-1">
        
        </div>
        </div></>
    )
    
}

export default ProductList1 