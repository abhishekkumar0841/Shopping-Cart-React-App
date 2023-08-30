import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import shoppingCartLogo from "../assets/shoppingCartLogo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between">
      <div>
        <NavLink to={'/'}>
        <img src={shoppingCartLogo} alt="Logo" width={100} />
        </NavLink>
      </div>
      <div className="flex items-center gap-5 w-[15%] justify-between">
        <NavLink to={'/'}>
          <p className="text-2xl text-white font-bold">Home</p>
        </NavLink>
        <div className="h-[50px] w-[50px] rounded-full bg-white flex items-center justify-center">
          <NavLink  className="text-4xl font-bold" to={"/cart"}>
            <AiOutlineShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
