import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSpring, animated, config } from "@react-spring/web";
function ProductTopSlider({ slidername, SliderImage, btnname, btnaction }) {
  const [{ background }] = useSpring(
    () => ({
      from: {
        background: "var(--from, pink)",
      },
      to: {
        background: "var(--to, purple)",
      },
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <div
      className="container mt-5 text-white"
      // #F2EBDD
      style={{ backgroundColor: "#ffddde" }}
    >
      <animated.div style={{ background }}>
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
            {/* sizes="320 640 750"
    layout="responsive" */}
            <Image
              src={SliderImage}
              alt=" "
              className="logo  "
              width={200}
              height={180}
            />
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ProductTopSlider;

// <div>
//   <animated.div style={{ background }}>
//     <h1>mahmudul hasan</h1>
//   </animated.div>
// </div>
