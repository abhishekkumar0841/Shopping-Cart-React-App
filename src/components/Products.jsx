import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const Products = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch()

  const removeProduct = ()=>{
    dispatch(removeFromCart(product.id))
    toast.error("Item removed from cart")
  }
   
  const addProduct = () =>{
    dispatch(addToCart(product))
    toast.success("Item added to cart")
  }

  return (
    <div className="w-[30%] border-2 border-black flex items-center flex-col p-2 gap-2 ">
      <div className="text-center font-bold text-2xl">
        <p>{product.title.substring(0, 20)}...</p>
      </div>
      <div className="w-[150px] h-[150px]">
        <img className="w-full h-full" src={product.image} alt="" />
      </div>
      <div className="text-center">
        <p className="">{product.description.substring(0,90)}...</p>
      </div>
      <div>
        <p className="font-bold text-xl">
          Price:{" "}
          <span className="text-green-700 font-bold text-xl">
            ${product.price}
          </span>
        </p>
      </div>
      <div className="">
        {cart.some((cartProduct) => cartProduct.id === product.id) ? (
          <button onClick={removeProduct} className="font-bold px-4 py-2 bg-red-500 rounded-lg text-white">
            Remove From Cart
          </button>
        ) : (
          <button onClick={addProduct} className="font-bold px-4 py-2 bg-green-600 rounded-lg text-white">
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
