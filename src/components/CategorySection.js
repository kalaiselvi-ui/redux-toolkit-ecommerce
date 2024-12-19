import React from "react";
import KidsCategory from "../assets/Images/kid-cate.jpg";
import MenCategory from "../assets/Images/men-cate.jpg";
import WomenCategory from "../assets/Images/women-cate.jpg";

const CategorySection = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: MenCategory,
    },
    {
      title: "Women",
      imageUrl: WomenCategory,
    },
    {
      title: "Kids",
      imageUrl: KidsCategory,
    },
  ];
  return (
    <div
      className="container mx-auto grid grid-cols-1
    sm:grid-cols-3 gap-6 mt-6"
    >
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
