import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import ButtonGlobal from "../Product/ButtonGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import {
  faSolid,
  faBackward,
  faArrowLeft,
  faCircleArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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
      src: "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg?w=740&t=st=1653590697~exp=1653591297~hmac=c5afad6296734881fc20e168ed220575e433e37798cf5161cf5507241d6a40c6",
    },

    {
      src: "https://img.freepik.com/free-photo/stunning-curly-female-model-jumping-purple-indoor-portrait-slim-girl-bright-yellow-dress_197531-10836.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
    },
    {
      src: "https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
    },
    {
      src: "https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
    },

    {
      src: "https://img.freepik.com/free-vector/beautiful-girls_1284-3454.jpg?size=338&ext=jpg&ga=GA1.2.548484110.1648268856",
    },
    {
      src: "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
    },
    {
      src: "https://img.freepik.com/free-photo/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes_197531-14251.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
    },
  ];
  return (
    <section className="container p-4 " style={{ backgroundColor: "#FFDDDE" }}>
      <div className="row g-2 align-items-center   pt-2 pb-3 p-4">
        {" "}
        <Fade left>
          <div className="col-sm-12 col-md-5 ">
            {" "}
            <div className="text-center">
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

                {/* <button
                className="btn rounded-pill p-2 px-3 my-4 "
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                DISCOVER THE NEW STYLE
              </button> */}
                <ButtonGlobal
                  btnname="DISCOVER THE NEW STYLE"
                  btnaction="/productList"
                />
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-sm-12  col-md-7  ">
            <div className="  justify-content-center align-items-center  ">
              <div className="  card    ">
                {/* start carousel */}
                <div
                  id="carouselExampleInterval"
                  className="carousel slide   "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner  ">
                    <Slider {...settings}>
                      {photos.map((photo) => (
                        <div
                          className="carousel-item active  "
                          data-bs-interval="500"
                          key={photo.src}
                        >
                          {/* <Image
                          src={photo.src}
                          alt="new arrrival product"
                          width={500}
                          height={562}
                          layout="responsive"
                          className="d-block w-100"
                        /> */}
                          <img
                            src={photo.src}
                            alt="new arrrival product"
                            width={500}
                            height={562}
                            layout="responsive"
                            className="d-block w-100"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <button
                    className="carousel-control-prev fs-1 fw-bolder"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon  "
                      aria-hidden="true"
                    ></span>
                    {/* style={{
                      fontSize: 40,
                      color: "black",

                      border: "50%",
                      fontWeight: "bolder",
                      marginLeft: "-12px",
                    }} */}

                    {/* <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{
                      fontSize: 40,
                      color: "black",
                      backgroundColor: "white",
                      border: "50%",
                      fontWeight: "bolder",
                      marginLeft: "-12px",
                    }}
                  /> */}
                    <span className="visually-hidden ">Previous</span>
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
                    {/* <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                      fontSize: 40,
                      color: "black",
                      backgroundColor: "white",
                      border: "50%",
                      fontWeight: "bolder",
                      marginRight: "-12px",
                    }}
                  /> */}
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </Fade>
      </div>
    </section>
  );
}

export default SliderHome;
