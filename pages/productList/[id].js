import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../../component/StarRating";
import IncrementDecrement from "../../component/IncrementDecrement";
import SignIn from "/public/home/Sign-in.png";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
// test code
import { useCart } from "react-use-cart";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductDetails = () => {
  const { addItem } = useCart();
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://arshi365.lamptechs.com/api/admin/products/${id}`,
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );
  console.log("my object data is", data);
  const { data: session } = useSession();
  const BuyNow = () => {
    session ? router.push("/payment") : router.push("/signup");
  };

  return (
    <div
      className="container   row m-auto align-items-center 
justify-content-center my-3"
      style={{ backgroundColor: "#F2EBDD" }}
    >
      {data ? (
        <>
          <div className="col-md-6 p-3">
            <img
              src={data.image_one || <Skeleton />}
              alt="product-img"
              width={434}
              height={475}
              className=" ms-1"
            />
            {/* test */}
            {/* <Image
          src={SignIn}
          alt="product-img"
          width={434}
          height={475}
          className=" ms-1"
        /> */}
          </div>
          <div className="col-md-6 p-3">
            <h1
              className="py-2 my-2 fs-1 fw-bolder "
              style={{ color: "#ff8095" }}
            >
              {data.name || <Skeleton />}
            </h1>
            <p>{data.long_description}</p>
            {/* review section */}
            {/* <div className="text-warning">
          <StarRating />
          <small> 1 Review</small>
          <small className="ms-2">| Add your Review</small>
        </div> */}
            <p
              className="fs-5 fw-bolder mt-2 "
              style={{
                color: "#ff8095",
                border: 0,
              }}
            >
              ৳ {data.price || <Skeleton />}
            </p>
            <p> Earn 5 Club Points</p>
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
        <div className="row gx-4 p-2  ">
          <div className="col p-3">
            <Skeleton
              borderRadius={10}
              height={500}
              width={400}
              highlightColor={"white"}
            />
          </div>
          <div className="col p-3">
            <div className="  p-3 my-1">
              <Skeleton height={50} />
            </div>
            <div className="  p-3 my-1">
              <Skeleton height={200} />
            </div>
            <div className="  p-3 my-1">
              <Skeleton height={40} />
            </div>
            <div className="  p-3 my-1">
              <Skeleton height={20} />
            </div>
            <div className="  p-3 my-1">
              <Skeleton height={50} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
