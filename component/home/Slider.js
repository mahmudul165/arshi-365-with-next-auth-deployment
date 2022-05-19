import React from "react";
import Image from "next/image";
import Slider from "react-slick";
function SliderHome() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  const photos = [
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    },
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    },
  ];
  return (
    <section className="container   " style={{ backgroundColor: "#FFDDDE" }}>
      <div className="row g-2 align-items-center   pt-2 pb-3 ">
        <div className="col-sm-12 col-md-6    p-4 ">
          <div className="p-2">
            {" "}
            <div className=" h-100    border-light border-5  ">
              <h1
                className="text-color   fw-bolder "
                style={{ fontSize: "73px" }}
              >
                Arshi
              </h1>
              <h5
                className="card-title text-color py-2"
                style={{ fontSize: "42px" }}
              >
                365
              </h5>
              <p className="py-2 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequatur similique quibusdam velit fugit rem, reprehenderit
                at id pariatur omnis, et asperiores placeat, sed facere earum?
              </p>

              <button
                className="btn rounded-pill p-2 px-3 my-4 "
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                DISCOVER THE NEW STYLE
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12  col-md-6 p-4">
          <div className="  d-flex justify-content-center align-items-center  ">
            <div className="  card    border-light border-5">
              {/* start carousel */}
              <div
                id="carouselExampleInterval"
                className="carousel slide   "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner  ">
                  <Slider {...settings}>
                    {photos.map((photo) => (
                      <>
                        <div
                          className="carousel-item active  "
                          data-bs-interval="500"
                          key={photo.src}
                        >
                          <img
                            src={photo.src}
                            alt="new arrrival product"
                            width={492}
                            height={562}
                            className="d-block w-100"
                          />
                        </div>
                      </>
                    ))}
                  </Slider>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderHome;
