import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";

const Products = () => {
  // store fetch data
  // const [Products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://arshi365.lamptechs.com/api/admin/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products",
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );
  //console.log("testing data from apiAction", Products);
  return (
    <div className="container">
      <h3 className="fs-1 fw-bolder pt-3" style={{ color: "#ff8095" }}>
        Top selected
      </h3>
      <div className="row    text-center my-2 py-2 ">
        {data ? (
          data.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-4 p-2  ">
              <Link href={`productList/${product.id}`} passHref>
                <div className="card border-0 ">
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
          <div className="row    text-center my-2 py-2 ">
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
            <div className="col-sm-12 col-md-4 p-2  ">
              <Skeleton height={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
