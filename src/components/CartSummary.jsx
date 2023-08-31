import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const checkoutHandler = ()=>{
    toast.error("Sorry, this feature is not available! Wait for next version !")
  }

  return (
    <div className="flex flex-col gap-4 mt-[70px] w-full justify-center">
      <div className="text-center text-4xl font-bold">
        <p className="tracking-widest">Your Cart Summary</p>
      </div>
      <div className="flex flex-col items-center justify-around">
        <p className="font-bold text-2xl">
          Total Items:{" "}
          <span className="text-green-500 py-2 px-6 rounded">
            {" "}
            {cart.length}{" "}
          </span>
        </p>
        <p className="font-bold text-2xl">
          Total Amount:{" "}
          <span className="text-green-500 p-2 rounded">
            ${totalAmount}{" "}
          </span>
        </p>
      </div>
      <div className="text-center">
        <button className="bg-green-500 px-4 py-2 text-white rounded-lg font-bold tracking-widest text-2xl" onClick={checkoutHandler}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
