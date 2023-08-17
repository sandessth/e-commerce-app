import Link from "next/link";
import React from "react";
import { PiSignOut } from "react-icons/Pi";
import { BiSearch } from "react-icons/Bi";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";
function NavBar() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-white px-3 py-2">
        <nav className="  px-2 px-5 ">
          <div className="flex justify-between items-center">
            <div>
              <Link
                href="/"
                className="text-slate-900/80 hover:text-blue-500 hover:backdrop-lg text-lg"
              >
                <div className="flex text-2xl font-bold">infamy</div>
              </Link>
            </div>
            
            {/* {searchSection && <Search setSearchSection={setSearchSection} />} */}
            <div className="flex justify-between items-center">
              
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
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
