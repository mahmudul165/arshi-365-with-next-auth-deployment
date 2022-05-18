import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../../component/StarRating";
import IncrementDecrement from "../../component/IncrementDecrement";

const BlogDetails = () => {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  // console.log("pid is ", slug);

  useEffect(() => {
    fetch(`https://intense-caverns-52774.herokuapp.com/packages/${slug}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  console.log("details is", details);
  const { _id, name, price, description, img } = details;
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
          {name}
        </h1>
        <p>{description}</p>
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
          ৳ {price}
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
            {/*href={`products/${_id}'/payment'`}*/}
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
};

export default BlogDetails;
