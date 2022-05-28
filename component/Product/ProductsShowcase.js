import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
function ProductsShowcase({ data }) {
  // Our custom easing
  let easing = [0.6, -0.05, 0.01, 0.99];

  // animate: defines animation
  // initial: defines initial state of animation or stating point.
  // exit: defines animation when component exits

  // Custom variant
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className="container my-4"
      style={{ backgroundColor: "#ffddde" }}
    >
      <motion.div variants={stagger} className="row    text-center my-2  py-3 ">
        {data ? (
          data.map((product) => (
            <div key={product.id} className="col-sm-12 col-md-4  my-2 py-1">
              <Link href={`productList/${product.id}`} passHref>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="card border-0 "
                >
                  <motion.img
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={product.image_one}
                    alt="E-COMMERCE  products"
                    className="card-img-top  p-2 "
                    width={336}
                    height={336}
                    layout="responsive"
                  />

                  {/* <Image
                    src={sunset1}
                    alt="Sunset"
                    width={600}
                    height={450}
                    layout="responsive"
                   placeholder="blur"
                    blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                  /> */}

                  <div className="card-body">
                    <motion.div
                      animate={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      className="title"
                    >
                      <h6 className="card-title fs-6 fw-bolder">
                        {product.name}
                      </h6>{" "}
                    </motion.div>
                    <p
                      className="text-center fs-5 fw-bolder "
                      style={{
                        color: "#ff8095",
                        border: 0,
                      }}
                    >
                      ৳{product.price}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))
        ) : (
          <div className="row    text-center my-2 py-3 ">
            <div className="col-sm-12 col-md-4 ps-2  ">
              <Skeleton height={400} />
            </div>
            <div className="col-sm-12 col-md-4 px-3  ">
              <Skeleton height={400} />
            </div>
            <div className="col-sm-12 col-md-4 pe-2  ">
              <Skeleton height={400} />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProductsShowcase;
