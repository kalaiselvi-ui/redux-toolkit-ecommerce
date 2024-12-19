import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { setSearchTerm } from "../../redux/productSlice";
import Modal from "../Modal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 justify-between items-center flex">
        <div className="text-lg font-bold">
          <Link to="/">e-SHOP</Link>
        </div>
        <div className="relative flex-1 m-4">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4 hover:border-black hover:outline-none focus:outline-none cursor-pointer"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-3 text-xs w-4 h-4 left-3 bg-red-500 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button className="md:hidden block">
            <FaUser />
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center space-x-6 py-3 text-sm font-bold">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/shop" className="hover:underline">
            SHOP
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            About
          </Link>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
