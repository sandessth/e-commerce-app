"use client";
import Link from "next/link";
import React from "react";
import SearchBar from "./searchbar";
import { useRouter } from "next/navigation";
import { PiSignOut } from "react-icons/Pi";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";
import { useAppSelector } from "@/redux/store/hooks";
import { Badge } from "@mui/material";
import { useGetAllProductsQuery } from "@/redux/features(slices)/products/productsApi";
import "flowbite";
import Category from "./category";
// import { useGetAllUsersQuery } from "@/redux/features(slices)/users/userApi";

function NavBarIn() {
  const router = useRouter();
  const userEmail = localStorage.getItem("email");
  const cart = useAppSelector((state) => state.cart);
  // const { data, error, isLoading } = useGetAllUsersQuery();
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);

  const HandleLogout = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("cartItems");
    router.push("/signin");
  };
  return (
    <>
      <div>
        <header className="bg-slate-100 py-2 border-b">
          <div className="mx-4">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="mr-2">
                <div className="flex items-center gap-3 flex-shrink-0 mr-auto">
                  {/* <p className="text-2xl font-bold">infamy</p> */}
                  <a href="/">
                    <img
                      src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=50000"
                      style={{ height: "50px", width: "60px" }}
                      height="40"
                      width="120"
                      alt="Infamy"
                    />
                  </a>
                  <p className="text-2xl font-bold">infamy</p>
                </div>
              </Link>
              <SearchBar />

              <div className="flex items-center gap-4 ml-auto">
                <Category />
                <Link
                  href="/wishlist"
                  // className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                >
                  <span className="hidden lg:inline text-2xl hover:text-blue-500">
                    <FiHeart />
                  </span>
                </Link>
                <Link
                  href="/cart"
                  // className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                >
                  <span className="hidden lg:inline text-2xl hover:text-blue-500">
                    <Badge
                      badgeContent={cart.cartTotalQuantity}
                      color="primary"
                    >
                      <BsCart />
                    </Badge>
                  </span>
                </Link>
                <Link
                  href="/signin"
                  // className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
                >
                  {/* <i className="text-gray-400 w-5 fa fa-user"></i> */}
                  <span
                    className="hidden lg:inline text-3xl hover:text-blue-500"
                    onClick={HandleLogout}
                  >
                    <PiSignOut />
                    <div className="hidden text-sm font-normal p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                      SignOut
                    </div>
                  </span>
                </Link>
                <Link href="/me">
                  <div className="flex items-center mb-2 space-x-3 mt-2 cursor-pointer group relative">
                    <div>
                      <img
                        className="w-10 h-10 border-2 border-gray-500 hover:border-gray-400 rounded-full"
                        src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=10000"
                      />
                    </div>
                    <div className="space-y-1 font-medium">
                      <p>
                        <time className="block text-sm text-gray-500 dark:text-gray-400">
                          {userEmail}
                        </time>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBarIn;
