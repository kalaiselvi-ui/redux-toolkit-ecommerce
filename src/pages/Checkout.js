import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Checkout = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShipingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShinppingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "2332",
      shippingInformation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    toast.success("Your Order has been placed Successfully");
    setTimeout(() => {
      navigate("/order-confirmation");
    }, 3500);
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:p-16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4 uppercase">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3 w-full">
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShipingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShinppingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City Name"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShinppingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) =>
                      setShinppingInfo({
                        ...shippingInfo,
                        zip: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Payment */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2 space-x-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700">Cash on delivery</label>
              </div>
              <div className="flex items-center mb-2 space-x-3">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700">Debit Card</label>
              </div>
            </div>
            {paymentMethod === "dc" && (
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h3 className="text-xl font-semibold mb-4">
                  Debit Card Information
                </h3>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Card Number"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-semibold mb-2
                  "
                    required
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    className="border p-2 w-full rounded"
                    placeholder="Enter Card Holder Name"
                    required
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <div className="w-1/2 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Expire Date
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full rounded"
                      placeholder="Enter Expire Date"
                      required
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      CW
                    </label>
                    <input
                      type="text"
                      placeholder="CW"
                      className="border p-2 w-full rounded"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg border shadow-md">
          <h3 className="font-semibold text-xl mb-5">Order Summary</h3>
          <div className="space-y-4 ">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 object-contain rounded"
                    src={product.image}
                    alt=""
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between pt-5 border-t">
              <span>Total Price:</span>
              <span className="font-semibold text-lg">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            onClick={() => handleOrder()}
            className="w-full mt-5 bg-red-600 text-white hover:bg-red-800 py-2"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
