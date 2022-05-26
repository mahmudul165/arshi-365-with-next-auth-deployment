import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../../component/StarRating";
import IncrementDecrement from "../../component/IncrementDecrement";
import SignIn from "/public/home/Sign-in.png";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useAuth from "../../hook/useAuth";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  const { addItem } = useCart();
  const { BuyNow } = useAuth();
  const [imageSlider, setImage] = useState({});

  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://arshi365.lamptechs.com/api/admin/products/${id}`,
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );

  console.log("my object data is", data);
  const { data: session } = useSession();

  const handleImage = (img) => {
    console.log("img first", img);
    setImage(img);
  };
  //console.log("img first", handleImage);
  const { items, updateItemQuantity } = useCart();
  console.log(" items array is", items);
  return (
    <div className="container details">
      <div
        className="container   row m-auto align-items-center 
justify-content-center m-3 p-2 gx-0  "
        style={{ backgroundColor: "#F2EBDD" }}
      >
        {data ? (
          <>
            <div className="col-md-6 big-img">
              {Object.keys(imageSlider).length === 0 ? (
                <img src={data.image_one} alt="product-img" className="" />
              ) : (
                <img src={imageSlider} alt="product-img" />
              )}

              {/* test */}
              {/* <Image
       src={SignIn}
       alt="product-img"
       width={434}
       height={475}
       className=" ms-1"
     /> */}
            </div>
            <div className="col-md-6 box pt-2 ">
              {/* slider img */}
              <div className=" d-flex pt-1">
                <img
                  onClick={() => handleImage(event.target.src)}
                  src={data.image_one}
                  className="w-25  p-2"
                ></img>
                <img
                  onClick={() => handleImage(event.target.src)}
                  src={data.image_two}
                  className="w-25  p-2 mx-3"
                ></img>
                <img
                  onClick={() => handleImage(event.target.src)}
                  src={data.image_three}
                  className="w-25  p-2"
                ></img>
              </div>
              <h2 className="py-2 my-2  text-uppercase">{data.name}</h2>

              {/* review section */}
              <div>
                <StarRating />
                <div className="fs-5 fw-bold  my-2 py-1 ">
                  <small> 3 Review</small>
                  <small className="ms-2">| Add your Review</small>
                </div>
              </div>
              <p>{data.short_description}</p>

              <p
                className="fs-4 fw-bolder mt-2 "
                style={{
                  color: "#ff8095",
                  border: 0,
                }}
              >
                <span className="fs-4 fw-bolder  mt-2 "> ৳</span>{" "}
                {data.price || <Skeleton />}
              </p>

              <div className="d-flex  align-items-center  ">
                <div className="d-flex p-2">
                  <p className="fs-5 ">Size*</p>

                  <select
                    className="form-select  mx-2"
                    aria-label="Default select example"
                  >
                    <option value="1">S</option>
                    <option value="2"> M</option>
                    <option value="3">L</option>
                    <option value="4">XL</option>
                    <option value="5">XXL</option>
                  </select>
                </div>
                <p className="fs-5   mt-2 ">
                  Status: <span className="text-warning">In stock</span>
                </p>
              </div>

              {/* <p> Earn 5 Club Points</p> */}
              {/* increment decrement */}
              {/* <IncrementDecrement /> */}

              <div>
                <div className="my-2  btn-group btn-group-sm" role="group">
                  <button
                    onClick={() => addItem(data)}
                    className="col btn btn-sm  rounded-pill p-2"
                    style={{
                      backgroundColor: "white",
                      color: "#ff8095",
                      border: 0,
                    }}
                  >
                    ADD TO CART
                  </button>
                  {/*href={`products/${_id}'/payment'`}*/}
                  {/* <Link href="/payment" passHref> */}
                  <button
                    onClick={BuyNow}
                    className="col btn btn-sm  rounded-pill  ms-2 p-2"
                    style={{
                      backgroundColor: "white",
                      color: "#ff8095",
                      border: 0,
                    }}
                  >
                    BUY NOW
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row   p-2 justfy-content-center p-3  ">
            <div className="col    my-3">
              <Skeleton
                borderRadius={10}
                height={500}
                width={320}
                highlightColor={"white"}
              />
            </div>
            <div className="col  ">
              <div className="d-flex mb-2 ">
                <div>
                  <Skeleton height={80} width={73} />
                </div>
                <div className="mx-5">
                  <Skeleton height={80} width={73} />
                </div>
                <div>
                  <Skeleton height={80} width={73} />
                </div>
              </div>
              <div className=" py-2 my-4">
                <Skeleton height={110} />
              </div>
              <div className="   ">
                <Skeleton height={50} />
              </div>
              <div className=" py-2 my-4">
                <Skeleton height={30} />
              </div>
              <div className="   ">
                <Skeleton height={30} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
