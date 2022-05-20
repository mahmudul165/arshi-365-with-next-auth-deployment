import React from "react";
import Gallery from "react-photo-gallery";
import Image from "next/image";
function Showcase() {
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 4,
      height: 3,
    },
  ];

  return (
    <div
      className="container mt-5 text-white"
      style={{ backgroundColor: "#F2EBDD" }}
    >
      <div
        className="row gx-4 mt-5 justify-content-center align-items-center "
        style={{ marginLeft: -15, marginRight: -15 }}
      >
        <div className="col-md-6   my-2 p-2">
          {/* image gallery*/}
          <div className="d-flex flex-column  p-2 m-2  ">
            <div>
              <h1
                className="p-2 fs-1 fw-bolder responsive-new-arrival"
                style={{ color: "#ff8095" }}
              >
                NEW ARRIVALS
              </h1>
            </div>
            <Gallery photos={photos} className="p-2 my-4" />
            <button
              className="btn rounded-pill p-2 px-3 my-4 "
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
            >
              EXPLORE MORE
            </button>
          </div>
        </div>
        <div className="d-flex flex-column col-md-6  justify-content-center align-items-center m-auto ">
          <div className="conatiner">
            {/* new arrival image*/}
            <a href="">
              <Image
                src="/home/new arrivel 1.png"
                alt="new arrrival product"
                width={430}
                height={546}
                className="p-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
