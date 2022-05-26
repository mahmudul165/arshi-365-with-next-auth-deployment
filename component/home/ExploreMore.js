import React from "react";
import SliderImage from "/public/videos/homeslider.gif";
import ProductTopSlider from "/component/Product/ProductTopSlider";
function ExploreMore() {
  return (
    <>
      <ProductTopSlider
        slidername="LIFESTYLE"
        SliderImage={SliderImage}
        btnname="Today Deals More"
        btnaction="/productList"
      />
    </>
  );
}

export default ExploreMore;
