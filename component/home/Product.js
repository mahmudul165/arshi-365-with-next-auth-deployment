import React from "react";
//import { Link } from "react-router-dom";
// import { AwesomeButton } from "react-awesome-button";
// import "react-awesome-button/dist/styles.css";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";
import Singleproduct from "/public/images/jacket-1.png";
const Product = ({ product }) => {
  // const {product} = props;
  const { name, price, short_description, long_description, image_one } =
    product;
  // animation
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 2 },
  });
  return (
    <>
      <Link href={`productList/${product.id}`} passHref>
        <div className="col-sm-12 col-md-4 p-2  ">
          <div className="card border-0 ">
            <Image
              src={Singleproduct}
              alt="E-COMMERCE  products"
              className="card-img-top  p-2  "
              width={336}
              height={336}
            />
            <div className="card-body">
              <h6 className="card-title fs-6 fw-bolder">{name}</h6>
              <p
                className="text-center fs-5 fw-bolder "
                style={{
                  color: "#ff8095",
                  border: 0,
                }}
              >
                ৳{price}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
