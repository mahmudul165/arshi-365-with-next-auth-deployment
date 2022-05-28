import React from "react";
import Gallery from "react-photo-gallery";
import Image from "next/image";
import ProductSliderHeader from "../Product/ProductSliderHeader";
import ButtonGlobal from "../Product/ButtonGlobal";
import NewArrivalimage from "/public/images/11.png";
function Showcase() {
  const photos = [
    // {
    //   src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    //   width: 4,
    //   height: 3,
    // },
    {
      src: "https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
      width: 4,
      height: 3,
    },

    {
      src: "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg?w=740&t=st=1653590697~exp=1653591297~hmac=c5afad6296734881fc20e168ed220575e433e37798cf5161cf5507241d6a40c6",
      width: 4,
      height: 3,
    },
    {
      src: "https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?size=626&ext=jpg&ga=GA1.2.548484110.1648268856",
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
            <ProductSliderHeader catagoryName="NEW ARRIVALS" />
            <Gallery photos={photos} className="p-2 mb-4" />
            {/* <button
              className="btn rounded-pill p-2 px-3 my-4 "
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
            >
              EXPLORE MORE
            </button> */}
            <ButtonGlobal btnname="EXPLORE MORE" btnaction="/productList" />
          </div>
        </div>
        <div className="d-flex flex-column col-md-6  justify-content-center align-items-center m-auto ">
          <div className="conatiner">
            {/* new arrival image*/}
            <a href="">
              <Image
                src={NewArrivalimage}
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
