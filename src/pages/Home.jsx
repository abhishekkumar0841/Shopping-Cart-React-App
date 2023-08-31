import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Loader from "../components/Loader";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductsData() {
    try {
      setLoading(true);

      const response = await fetch(API_URL);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log("Something went wrong", error);
      setProductData([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center mt-[100px]">
      {loading ? (
        <Loader />
      ) : productData.length > 0 ? (
        <div className="w-[90%] border sm:flex flex-wrap justify-between mx-auto gap-4 mt-4">
          {productData.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className="text-4xl tracking-widest font-bold">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
