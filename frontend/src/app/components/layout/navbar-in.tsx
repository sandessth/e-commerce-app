import Link from "next/link";
import React from "react";
import SearchBar from "./searchbar";
import { useRouter } from "next/navigation";
import { PiSignOut } from "react-icons/Pi";
import { BiSearch } from "react-icons/Bi";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";

function NavBarIn() {

    const router = useRouter();
    const userEmail = localStorage.getItem("email")


    const HandleLogout = (event: { preventDefault: () => void }) => {
        event.preventDefault();
    
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        router.push("/signin");
      };
  return <>
  <div>
  
  <header className="bg-slate-100 py-2 border-b">
  <div className="mx-4">
  {/* <div className="flex justify-end items-center">
              
              <div
                // onClick={() => setSearchSection(!searchSection)}
                className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative pl-16"
              >
                <BiSearch />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Search
                </div>
              </div>
              <p className="text-slate-100/80  hover:backdrop-lg px-3">|</p>
              <Link
                href="/signin"
                className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
                // onClick={HandleLogout}
              >
                <FiHeart />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Wishlist
                </div>
              </Link>
              <p className="text-slate-100/80  hover:backdrop-lg px-3">|</p>
              <Link
                href="/signin"
                className="text-slate-900/80 text-xl hover:text-blue-500 hover:backdrop-lg group relative"
                // onClick={HandleLogout}
              >
                <BsCart />
                <div className="hidden text-sm p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  Cart
                </div>
              </Link>
              <p className="text-slate-100/80  hover:backdrop-lg px-3">|</p>
              <Link
                href="/signin"
                className="text-slate-900/80 text-xl font-bold hover:text-blue-500 hover:backdrop-lg group relative"
                // onClick={HandleLogout}
              >
                <PiSignOut />
                <div className="hidden text-sm font-normal p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  SignOut
                </div>
              </Link>
            </div> */}
    <div className="flex flex-wrap items-center gap-2">
      <Link href="/" className="mr-2"><div className="flex items-center gap-3 flex-shrink-0 mr-auto">
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
      </div></Link>
      <SearchBar />

      <div className="flex items-center space-x-3 ml-auto">
        <Link
          href="/cart"
          className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
        >
          <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
          <span className="hidden lg:inline ml-1">
            Cart (<b>0</b>)
          </span>
        </Link>
        <Link
          href="/signin"
          className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
        >
          {/* <i className="text-gray-400 w-5 fa fa-user"></i> */}
          <span className="hidden lg:inline" onClick={HandleLogout}>Sign Out</span>
        </Link>
        <Link href="/me">
          <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer group relative">
            
            <div><img className="w-10 h-10 border-2 border-gray-500 hover:border-gray-400 rounded-full" src="https://api.dicebear.com/5.x/bottts-neutral/svg?seed=10000" />
            
                
                
              
            </div>
            <div className="space-y-1 font-medium">
              <p>
                San
                <time className="block text-sm text-gray-500 dark:text-gray-400">
                  {userEmail}
                </time>
              </p>
            </div> 
          </div>
         
          {/* <div className="hidden text-sm font-normal p-1 rounded-lg text-white group-hover:block absolute top-8 right-0 bg-gray-500/80">
                  SignOut
                </div> */}
        </Link>
      </div>

      {/* <div className="lg:hidden ml-2">
        <button
          type="button"
          className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
        >
          <span className="sr-only">Open menu</span>
          <i className="fa fa-bars fa-lg"></i>
        </button>
      </div> */}
    </div>
  </div>
</header>
</div>
</>;
}

export default NavBarIn;