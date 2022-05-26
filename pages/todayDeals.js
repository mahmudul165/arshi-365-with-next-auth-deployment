import React from "react";
// import styled from "styled-components";
import Products from "../component/home/Products";
import Image from "next/image";
import ExploreImage from "/public/home/exploreMore-image.png";
import ProductList from "./productList";
import ProductsShowcase from "../component/Product/ProductsShowcase";
import useSWR from "swr";
function TodayDeals() {
  // const Button = styled.button`
  //   background-color: white;
  //   color: #ff8095;
  //   border: 0;
  // `;
  // const H1 = styled.h1`
  //   color: #ff8095;
  // `;
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/todaysDeal",
    { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
  );
  console.log("todaydeal", data);
  return (
    <>
      <div
        className="container mt-5 text-white"
        style={{ backgroundColor: "#F2EBDD" }}
      >
        <div className="  row gx-4 mt-5  p-3">
          <div className="col-md-7 d-flex justify-content-center align-items-center ">
            {/* explore more image*/}
            <div className="d-flex flex-column p-1 text-center">
              <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
                we don’t design clothes. we design dreams.”
              </h1>
            </div>
          </div>
          <div className="d-flex flex-column col-md-5  justify-content-center align-items-center m-auto  ">
            {/* explore more image*/}
            <a className="navbar-brand" href="">
              <img
                style={{ width: 200, height: 160 }}
                className="logo "
                src={"/videos/lifestyleslider.gif"}
                alt=""
              />

              {/* <Image
                  src={ExploreImage}
                  alt=" "
                  className="logo  "
                  width={200}
                  height={180}
                /> */}
              {/* <video
                  width=" 200px"
                  height="160px"
                  borderRadius="5px"
                  autoPlay
                  muted
                  src={"/videos/lifestyleslider.gif"}
                /> */}
            </a>
          </div>
        </div>
      </div>
      <ProductsShowcase data={data} />
      {/* <Products /> */}
      {/* <ProductList /> */}
    </>
  );
}

export default TodayDeals;
