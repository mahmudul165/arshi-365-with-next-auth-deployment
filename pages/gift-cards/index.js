// import React from "react";

// function GiftCards() {
//   return (
//     <div className="container">
//       <div className="container card my-5 py-5 fs-1 border-0 bg-light rounded">
//         <h1 className="fs-1 fw-bolder text-warning  text-center">
//           Please wait we will come soon
//         </h1>
//         <h1 className="container card my-5 py-5 text-center fs-1 fs-bolder border-0 shadow-lg">
//           Gift Cards
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default GiftCards;
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
        slidername="ARSHI GIFT CARD"
        SliderImage={SliderImage}
        btnname="BUY ONE GET ONE"
        btnaction="/productList"
      />

      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;
