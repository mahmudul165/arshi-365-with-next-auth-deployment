import React from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";
const ProductsShowcase = dynamic(
  () => import("/component/Product/ProductsShowcase"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const ProductTopSlider = dynamic(
  () => import("/component/Product/ProductTopSlider"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import SliderImage from "/public/videos/homeslider.gif";
function TodayDeals() {
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/todaysDeal",
    { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
  );

  console.log("todaydeal", data);
  return (
    <>
      <ProductTopSlider
        slidername="TRENDING PRODUCTS ON ARSHI"
        SliderImage={SliderImage}
        btnname="TOP COLLECTION"
        btnaction="/productList"
      />

      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
