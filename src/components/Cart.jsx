import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const Cart = ({ product }) => {

    const dispatch = useDispatch()

    const removeItem = () =>{
        dispatch(removeFromCart(product.id))
        toast.error("Item Removed")
    }
    
  return (
    <div className=" flex w-full border my-4 justify-between">
      <div className="w-[30%] h-[300px] ">
        <img className="w-full h-full" src={product.image} alt="" />
      </div>
      <div className="w-[60%]  flex flex-col items-center justify-around">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">{product.title}</p>
          <p>{product.description}</p>
        </div>
        <div className="flex items-center justify-around w-full ">
          <p className="font-bold text-2xl ">Price: <span className="text-green-500">${product.price}</span></p>
          <div className='cursor-pointer h-[40px] w-[40px] bg-red-500 rounded-full text-white flex items-center justify-center text-4xl p-2 hover:scale-125 transition-all duration-200' onClick={removeItem}>
            <AiTwotoneDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
