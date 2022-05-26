import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductTopSlider({ slidername, SliderImage, btnname, btnaction }) {
  return (
    <div
      className="container mt-5 text-white"
      style={{ backgroundColor: "#F2EBDD" }}
    >
      {/*     
   style={{ backgroundColor: " F2EBDD" }} */}
      <div className="row gx-4    ">
        <div className="col-md-7 d-flex justify-content-center align-items-center ">
          {/* explore more image*/}
          <div className="d-flex flex-column p-1 text-center">
            <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
              {slidername}
            </h1>
            <Link href={btnaction} passHref>
              <button
                className="btn rounded-pill p-2 px-3 my-1"
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                {btnname}
              </button>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column col-md-5  justify-content-center align-items-center m-auto  ">
          {/* explore more image*/}

          {/* <video
          width=" 200px"
          height="160px"
          autoPlay
          muted
          src={"/videos/lifestyle.mp4"}
        /> */}
          {/* <img
            style={{ width: 200, height: 160 }}
            className="logo  "
            src="/videos/homeslider.gif"
            alt=""
          /> */}
          <Image
            src={SliderImage}
            alt=" "
            className="logo  "
            width={200}
            height={180}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductTopSlider;
