import React from "react";
// import styled from "styled-components";
import Products from "../component/home/Products";
import Image from "next/image";
import ExploreImage from "/public/home/exploreMore-image.png";
import ProductList from "./productList";
function todayDeals() {
  // const Button = styled.button`
  //   background-color: white;
  //   color: #ff8095;
  //   border: 0;
  // `;
  // const H1 = styled.h1`
  //   color: #ff8095;
  // `;
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
              {/* <button
                className="btn rounded-pill p-2 px-3"
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                EXPLORE MORE
              </button> */}
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
      {/* product */}

      {/* <Products /> */}
      <ProductList />
    </>
  );
}

export default todayDeals;
