import React from "react";
import ProductsShowcase from "../component/Product/ProductsShowcase";
import useSWR from "swr";
import ProductTopSlider from "../component/Product/ProductTopSlider";
import SliderImage from "/public/videos/lifestyleslider.gif";

function TodayDeals() {
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/todaysDeal",
    { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
  );

  console.log("todaydeal", data);
  return (
    <>
      <ProductTopSlider
        slidername=" we don’t design clothes. we design dreams.”"
        SliderImage={SliderImage}
        btnname="Today Deals More"
        btnaction="/productList"
      />

      <ProductsShowcase data={data} />
    </>
  );
}

export default TodayDeals;

{
  /* <div
className="container mt-5 text-white"
style={{ backgroundColor: "#F2EBDD" }}
>
<div className="  row gx-4 mt-5  p-3">
  <div className="col-md-7 d-flex justify-content-center align-items-center ">
    
    <div className="d-flex flex-column p-1 text-center">
      <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
        we don’t design clothes. we design dreams.”
      </h1>
      <Link href="/esss" passHref>
        <button
          className="btn rounded-pill p-2 px-3 my-1"
          style={{
            backgroundColor: "white",
            color: "#ff8095",
            border: 0,
          }}
        >
          explore more
        </button>
      </Link>
    </div>
  </div>
  <div className="d-flex flex-column col-md-5  justify-content-center align-items-center m-auto  ">
    
    
      <img
        style={{ width: 200, height: 160 }}
        className="logo "
        src={"/videos/lifestyleslider.gif"}
        alt=""
      />

      <Image
          src={ExploreImage}
          alt=" "
          className="logo  "
          width={200}
          height={180}
        />
      <video
          width=" 200px"
          height="160px"
          borderRadius="5px"
          autoPlay
          muted
          src={"/videos/lifestyleslider.gif"}
        />
   
  </div>
</div>
</div> */
}
