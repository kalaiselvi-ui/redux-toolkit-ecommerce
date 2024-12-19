import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const Order = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(clearCart());
  });

  if (!order) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4 lg:p-24 md:p-16">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
      <p>
        your order has been placed successfully you will recieve an email
        confirmation
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p>Address: {order.shippingInformation.address}</p>
          <p>City: {order.shippingInformation.city}</p>
          <p>Zip Code: {order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Items Ordered</h3>
          {order.products.map((product) => (
            <div className="flex justify-between mt-2">
              <p>
                {product.name} x {product.quantity}{" "}
              </p>
              <p>${product.price * product.quantity} </p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600">
          Order tracking
        </button>
        <button
          onClick={() => navigate("/")}
          className="ml-4 bg-red-600 text-white py-2 px-4 hover:bg-red-800"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
