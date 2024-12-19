import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import emptyCart from "../../assets/Images/emptycart.jpg";
import ChangeAddress from "../../components/ChangeAddress";
import Modal from "../../components/Modal";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleremoveFromCart = (productId) => {
    dispatch(removeFromCart({ id: productId }));
    toast.success("Item removed from the cart!");
  };

  const [address, setAddress] = useState("thannuthu, tenkasi, 61524");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {cart.products.length > 0 ? (
        <div className="container mx-auto py-8 min-h-96 px-4 md:p-16 lg:px-24 ">
          <h3 className="text-2xl font-semibold mb-4 uppercase">
            Shopping Cart
          </h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3 w-full">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt=""
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-11 items-center">
                    <p>${product.price}</p>
                    <div className="flex items-center border justify-center">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: product.id }))
                        }
                        className="text-xl font-bold px-1.5 border-r"
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity({ id: product.id }))
                        }
                        className="text-xl px-1 border-l"
                      >
                        +
                      </button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button>
                      <FaTrash
                        onClick={() => handleremoveFromCart(product.id)}
                        className="text-red-500 hover:text-red-700"
                      />{" "}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg border shadow-md">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL:</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="uppercase">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 hover:underline mt-1 ml-2"
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Total Price:</span>
                <span>$ {cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                className="w-full bg-red-600 text-white hover:bg-red-800 py-2"
              >
                Proced to Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} alt="" />
        </div>
      )}
    </div>
  );
};

export default Cart;
