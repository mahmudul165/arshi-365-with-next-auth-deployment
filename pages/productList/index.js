// import React from "react";
// import HorizontalGallery from "react-dynamic-carousel";
// import Carousel from "/component/home/Carousel";

// function index() {
//   return (
//     <div className="container">
//       <Carousel />

//     </div>
//   );
// }

// export default index;

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useCart } from "react-use-cart";
import axios, { Axios } from "axios";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const { addItem } = useCart();
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products",
    // { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );

  return (
    <div className="container my-4" style={{ backgroundColor: "#ffddde" }}>
      {/* <h3 className="fs-1 fw-bolder pt-3" style={{ color: "#ff8095" }}>
        Top selected
      </h3> */}

      <div className="row    text-center my-2 py-2 ">
        {data ? (
          data.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-4 p-2  my-4 ">
              <Link href={`productList/${product.id}`} passHref>
                <div className="card border-0 p-2">
                  <img
                    src={product.image_one}
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
              </Link>
            </div>
          ))
        ) : (
          <div className="row    text-center my-2 py-3 ">
            <div className="col-sm-12 col-md-4 ps-2  ">
              <Skeleton height={400} />
            </div>
            <div className="col-sm-12 col-md-4 px-3  ">
              <Skeleton height={400} />
            </div>
            <div className="col-sm-12 col-md-4 pe-2  ">
              <Skeleton height={400} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
