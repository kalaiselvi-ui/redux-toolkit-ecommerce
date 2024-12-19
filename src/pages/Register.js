import React from "react";

const Register = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form action="">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="name"
            name="name"
            className="w-full px-3 py-2 border"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already have an account?</span>
        <button className="text-red-800" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
