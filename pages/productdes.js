import React from "react";
import useSWR from "swr";
import DetailsThumb from "../component/Product/DetailsThumb";
import Colors from "../component/Product/ProductColor";
function Productdes() {
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products/20",
    { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
  );
  console.log("data text", data);
  return (
    <div className="app">
      {data ? (
        <div className="details">
          <div className="big-img">
            <img src={data.image_one} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2 className="py-2">{data.name}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors
                colors={(data.image_one, data.image_two, data.image_three)}
              /> */}

            <div className="colors">
              <button
                style={{
                  backgroundImage: data.image_one,
                }}
              ></button>
              <button
                style={{
                  backgroundImage: data.image_two,
                }}
              ></button>
              <button
                style={{
                  backgroundImage: data.image_three,
                }}
              ></button>
            </div>
            <p>{data.long_description}</p>
            <p>{data.short_description}</p>
            {/* 
              <DetailsThumb
                images={data.src}
                tab={this.handleTab}
                myRef={this.myRef}
              /> */}
            <button className="cart">Add to cart</button>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}

export default Productdes;
