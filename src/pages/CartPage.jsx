import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import { NavLink } from "react-router-dom";
import CartSummary from "../components/CartSummary";

const CartPage = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="w-[90%]  mt-4 mx-auto border">
      {cart.length > 0 ? (
        <div className="flex items-center flex-col">
            <CartSummary/>
          {cart.map((product) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full h-[300px] border flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-bold tracking-widest">
            Your cart is empty
          </h1>
          <NavLink to={"/"}>
            <button className="bg-green-500 text-white text-2xl px-8 py-4 rounded-lg font-bold">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartPage;
