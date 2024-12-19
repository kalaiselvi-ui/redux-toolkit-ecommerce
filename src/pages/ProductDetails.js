import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    if (products?.length > 0) {
      // Convert `id` to the same type as the product `id` (string or number)
      const newProduct = products.find(
        (product) => product.id.toString() === id
      );
      console.log(products.find((product) => product.id));
      console.log(id);
      setProduct(newProduct);
    }
  }, [id, products]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="container mx-auto p-8 my-6">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-1/2 h-48 object-contain shadow-md"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
