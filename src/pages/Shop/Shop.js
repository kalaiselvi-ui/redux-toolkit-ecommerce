import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../assets/mockData";
import ProductsList from "../../components/ProductsList";
import { setProducts } from "../../redux/productSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products, "shop");

  useEffect(() => {
    dispatch(setProducts(Products));
  }, [dispatch]);
  return (
    <section className="mx-auto py-12 px-4 lg:px-24 md:px-14">
      <h2 className="text-2xl font-bold text-center mb-5">SHOP</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.products.map((product) => (
          <ProductsList product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
