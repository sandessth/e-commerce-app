"use client";
import NavBarOut from "./navbar-out";
import NavBarIn from "./navbar-in";

function Header1() {

  const token = localStorage.getItem("token")

  if (!token) {
    return <NavBarOut />;
  }

  return <NavBarIn />;
  
  
}

export default Header1;