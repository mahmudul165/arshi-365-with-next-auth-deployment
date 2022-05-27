// import React from "react";

// function TopsCollection() {
//   return (
//     <div className="container">
//       <div className="container card my-5 py-5 fs-1 border-0 bg-light rounded">
//         <h1 className="fs-1 fw-bolder text-warning  text-center">
//           Please wait we will come soon
//         </h1>
//         <h1 className="container card my-5 py-5 text-center fs-1 fs-bolder border-0 shadow-lg">
//           Tops Collection
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default TopsCollection;
import React from "react";
import useSWR from "swr";
import ProductsShowcase from "../../component/Product/ProductsShowcase";
import ProductTopSlider from "../../component/Product/ProductTopSlider";

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
