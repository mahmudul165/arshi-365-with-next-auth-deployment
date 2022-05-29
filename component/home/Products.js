import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import ProductSliderHeader from "../Product/ProductSliderHeader";
import ProductsShowcase from "../Product/ProductsShowcase";

const Products = () => {
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products",
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );
  //console.log("testing data from apiAction", Products);
  return (
    <>
      <ProductSliderHeader catagoryName="LIFESTYLE" />
      <div className="container my-4" style={{ backgroundColor: "#ffddde" }}>
        <ProductsShowcase data={data} />
      </div>
    </>
  );
};

export default Products;

// 6 skeleton
{
  /* <div className="row    text-center mt-2 py-3 gy-4">
<div className="col-sm-12 col-md-4 ps-2  ">
  <Skeleton height={400} />
</div>
<div className="col-sm-12 col-md-4 px-3  ">
  <Skeleton height={400} />
</div>
<div className="col-sm-12 col-md-4 pe-2  ">
  <Skeleton height={400} />
</div>
<div className="col-sm-12 col-md-4 ps-2  ">
  <Skeleton height={400} />
</div>
<div className="col-sm-12 col-md-4 px-3  ">
  <Skeleton height={400} />
</div>
<div className="col-sm-12 col-md-4 pe-2  ">
  <Skeleton height={400} />
</div>
</div> */
}

// product show
{
  /* <div className="row    text-center my-2  py-3 ">
{data ? (
  data.map((product) => (
    <div key={product.id} className="col-sm-12 col-md-4  my-2 py-1">
      <Link href={`productList/${product.id}`} passHref>
        <div className="card border-0 ">
          <img
            src={product.image_one}
            alt="E-COMMERCE  products"
            className="card-img-top  p-2 "
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
</div> */
}
