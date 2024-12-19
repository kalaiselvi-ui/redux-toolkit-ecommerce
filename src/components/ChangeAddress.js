import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    if (newAddress.trim()) {
      setAddress(newAddress);
      setIsModalOpen(false);
    }
  };
  return (
    <div>
      <h3 className="text-lg mb-3">Change Shipping Address</h3>
      <input
        type="text"
        placeholder="Enter new address"
        className="border w-full p-2 mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
