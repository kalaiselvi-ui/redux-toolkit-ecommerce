import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../redux/cartSlice";

const ProductsList = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Item added to the cart!");
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-md flex flex-col relative border shadow p-5 cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <img
          src={product.image}
          alt=""
          className="w-full h-48 mb-4 object-cover "
        />

        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">$ {product.price}</p>
        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
          <FaStar className="text-yellow-500"></FaStar>
        </div>
        <div
          onClick={(e) => handleAddToCart(e, product)}
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
     group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 overflow-hidden transition-all duration-300"
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsList;
