import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import shoppingCartLogo from "../assets/shoppingCartLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state)=>state)

  return (
    <div className="w-[90%] mx-auto flex items-center justify-between">
      <div>
        <NavLink to={"/"}>
          <img className="w-[100px]" src={shoppingCartLogo} alt="Logo" />
        </NavLink>
      </div>
      <div className="flex items-center gap-5 justify-between">
        <NavLink to={"/"}>
          <p className="text-2xl text-white font-bold">Home</p>
        </NavLink>
        <div className="h-[50px] w-[50px] mr-10 rounded-full bg-white flex items-center justify-center relative">
          <NavLink className="text-4xl font-bold" to={"/cart"}>
            <AiOutlineShoppingCart />
          </NavLink>
            <div className="bg-green-600  flex items-center justify-center text-white h-[30px] w-[30px] rounded-full absolute top-[-10px] right-[-20px] text-2xl ">{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
