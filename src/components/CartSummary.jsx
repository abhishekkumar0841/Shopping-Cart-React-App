import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex flex-col gap-4 mt-[70px] w-full justify-center">
      <div className="text-center text-4xl font-bold">
        <p className="tracking-widest">Your Cart Summary</p>
      </div>
      <div className="flex items-center justify-around mt-4">
        <p className="font-bold text-2xl">
          Total Items:{" "}
          <span className="bg-green-500 text-white py-2 px-6 rounded">
            {" "}
            {cart.length}{" "}
          </span>
        </p>
        <p className="font-bold text-2xl">
          Total Amount:{" "}
          <span className="bg-green-500 text-white p-2 rounded">
            ${totalAmount}{" "}
          </span>
        </p>
      </div>
      <div className="text-center">
        <button className="bg-green-500 px-4 py-2 text-white rounded-lg font-bold tracking-widest text-2xl">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
