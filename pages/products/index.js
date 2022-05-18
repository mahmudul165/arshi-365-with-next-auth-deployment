import React, { useEffect, useState } from "react";

import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";
const Products = () => {
  // store fetch data
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://intense-caverns-52774.herokuapp.com/packages")
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
          <>
            <Link href={`products/${product._id}`}>
              <div className="col-sm-12 col-md-4 p-2  ">
                <div className="card border-0 " style={{ width: "22rem" }}>
                  <Image
                    src="/images/jacket-1.png"
                    alt="E-COMMERCE  products"
                    className="card-img-top  p-2  "
                    width={336}
                    height={336}
                  />
                  <div className="card-body">
                    <h6 className="card-title fs-6 fw-bolder">
                      {product.name}
                    </h6>
                    <p
                      className="text-center fs-5 fw-bolder "
                      style={{
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      ৳{product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
