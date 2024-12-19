import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import heroImg from "../../assets/Images/heroImage.jpg";
import Products, { Categories } from "../../assets/mockData";
import CategorySection from "../../components/CategorySection";
import InfoSection from "../../components/InfoSection";
import ProductsList from "../../components/ProductsList";
import { setProducts } from "../../redux/productSlice";
import Shop from "../Shop/Shop";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  useEffect(() => {
    dispatch(setProducts(Products));
  }, [dispatch]);

  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container space-x-2 mx-auto py-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12">
            <h3 className="bg-red-600 text-white text-xs px-2 py-2.5">
              SHOP BY CATEGORIES
            </h3>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 mt-8 md:mt-0 h-96 relative">
            <img className="w-full h-full rounded-md" src={heroImg} alt="" />
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
              <h2 className="text-white font-bold text-3xl mb-2">
                Welcome to e-SHOP
              </h2>
              <p className="text-gray-200 text-xl mb-4">MILLIONS+ PRODUCTS</p>
              <button
                className="bg-black text-white rounded-md px-8 py-1.5
            hover:bg-white hover:text-black transform transition-transform duration-300 hover:scale-105"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <section className="container mx-auto py-12">
          <h2 className="text-2xl font-bold text-center mb-5">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product, index) => (
              <div key={product.id} className="">
                <ProductsList product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Shop />
    </>
  );
};

export default Home;
