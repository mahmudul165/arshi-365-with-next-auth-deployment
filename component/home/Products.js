import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  // store fetch data
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://arshi365.lamptechs.com/api/admin/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("testing data from apiAction", Products);
  return (
    <div className="container">
      <h3 className="fs-1 fw-bolder pt-3" style={{ color: "#ff8095" }}>
        Top selected
      </h3>
      <div className="row    text-center my-2 py-2 ">
        {Products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
