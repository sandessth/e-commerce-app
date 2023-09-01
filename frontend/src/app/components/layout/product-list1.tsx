"use client";
import { addToCart } from "@/redux/features(slices)/cart/cartSlice";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import { addToWishList } from "@/redux/features(slices)/wishlist/wishListSlice";
import { useAppDispatch } from "@/redux/store/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function ProductList1() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  const dispatch = useDispatch();
  const router = useRouter();

  const HandleAddToWishList = (products) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addToWishList(products));
    } else {
      toast.error("Please signin to add products to cart.");
    }
  };
  const HandleAddToCart = (products) => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(addToCart(products));
    } else {
      toast.error("Please signin to add products to cart.");
    }
  };

  const HandleProduct = (id: number) => {
    router.push(`/product/${id}`);
  };

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div className="flex justify-center text-2xl m-2 mt-4">error loading</div>
  ) : (
    <>
      <div className="text-2xl flex justify-center m-3">Featured Products</div>
      <div className="grid grid-cols-2 gap-3 m-10 md:grid-cols-3 lg:grid-cols-5">
        {data?.map((products) => (
          <div key={products.id} className=" border border-black/20 rounded-lg">
            <div onClick={() => HandleProduct(products.id)}>
              <span className="text-lg flex justify-center p-3">
                {products.name}
              </span>

              <img src={products.image} alt={products.name} className="p-2" />
              <div className="text-sm text-slate-500 mx-5 mt-2">
                <div>Color: {products.color} </div>
                <div>Model: {products.Model}</div>
              </div>
              <div className="mx-5 mt-5 text-lg">${products.price}</div>
            </div>
            {/* <div className="text-sm mx-5 my-2 text-green-500">
              Free Shipping
            </div> */}
            <div className="mx-5 mb-5 mt-2 flex justify-between items-center">
              <div
                className="text-slate-900/80 text-white hover:backdrop-lg group relative border border-black/10 px-2 py-2 rounded-lg bg-blue-600"
                onClick={() => HandleAddToCart(products)}
              >
                <button className="flex justify-center items-center gap-2">
                  Add to cart
                  <BsCart />
                </button>
                {/* <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Add to Cart
                </div> */}
              </div>
              <div
                className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
                onClick={() => HandleAddToWishList(products)}
              >
                <FiHeart />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Add to Wishlist
                </div>
              </div>{" "}
            </div>
          </div>
        ))}
        <div className="col-span-1"></div>
      </div>
      {/* <ToastContainer position={toast.POSITION.TOP_CENTER} /> */}
    </>
  );
}

export default ProductList1;
