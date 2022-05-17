import React from "react";
import Image from "next/image";
import IncrementDecrement from "../component/IncrementDecrement";
import StarRating from "../component/StarRating";
import Link from "next/link";
function productDetails() {
  return (
    <div
      className="container   row m-auto align-items-center 
  justify-content-center my-3"
      style={{ backgroundColor: "#F2EBDD" }}
    >
      <div className="col-md-6 p-3">
        <Image
          src="/images/sign up.png"
          alt="icon-register"
          width={434}
          height={475}
          className=" ms-1"
        />
      </div>
      <div className="col-md-6 p-3">
        <h1 className="py-2 my-2 fs-1 fw-bolder " style={{ color: "#ff8095" }}>
          Moslin Salor Kamiz
        </h1>
        <p>
          It might be work, but it doesn’t have to feel like it. All it takes is
          ergonomic yet comfortable and stylish home office furniture to keep
          things organised, and the right lighting for the job.
        </p>
        <div className="text-warning">
          {/*  star */}
          <StarRating />
          {/* review */}
          <small> 1 Review</small>
          <small className="ms-2">| Add your Review</small>
        </div>
        <p
          className="fs-5 fw-bolder mt-2 "
          style={{
            color: "#ff8095",
            border: 0,
          }}
        >
          ৳ 12500
        </p>
        <p> Earn 5 Club Points</p>
        {/* increment decrement */}
        <IncrementDecrement />
        <div>
          <div className="my-2  btn-group btn-group-sm" role="group">
            <button
              className="col btn btn-sm  rounded-pill p-2"
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
            >
              ADD TO CART
            </button>
            <Link href="/payment">
              <button
                className="col btn btn-sm  rounded-pill  ms-2 p-2"
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                BUY NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetails;
