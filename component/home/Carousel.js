import React, { Component } from "react";
import Slider from "react-slick";

export default class Company extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    const photos = [
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
    ];
    return (
      <div className="container card border-0">
        <h1 className="text-center  my-5 ">
          Trusted by 5,000+ Companies Worldwide
        </h1>
        <div className="container my-4 py-4">
          <div className="container text-center my-4 py-4">
            <Slider {...settings}>
              {photos.map((photo) => (
                <>
                  <div className="p-2">
                    <img src={photo.src} alt="" className="w-25 h-25" />
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
