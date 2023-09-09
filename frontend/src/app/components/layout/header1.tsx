"use client";
import NavBarOut from "./navbar-out";
import NavBarIn from "./navbar-in";
import Link from "next/link";
import React from "react";
import { PiSignOut } from "react-icons/Pi";
import { BiSearch } from "react-icons/Bi";
import { BsCart } from "react-icons/Bs";
import { FiHeart } from "react-icons/Fi";

function Header1() {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <>
        <NavBarOut />
      </>
    );
  }

  return <NavBarIn />;
}

export default Header1;
