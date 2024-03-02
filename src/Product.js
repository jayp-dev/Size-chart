// Product.js
import React from "react";
import SizeChart from "./SizeChart";

const Product = () => {
  const sizeData = [
    { size: "S", chest: 34, waist: 28, hips: 36 },
    { size: "M", chest: 36, waist: 30, hips: 38 },
    { size: "L", chest: 38, waist: 32, hips: 40 },
    // ... more size data
  ];

  return (
    <div>
      {/* Product details */}
      <h1>Product Title</h1>
      {/* Other product details go here */}

      {/* Size chart */}
      <SizeChart sizes={sizeData} />
    </div>
  );
};

export default Product;
