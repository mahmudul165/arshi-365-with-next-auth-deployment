import Link from "next/link";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useAuth from "../hook/useAuth";
import { motion } from "framer-motion";
/**
 * https://stackoverflow.com/questions/65558652/how-do-i-fetch-search-results-from-multiple-api-using-reactjs
 */

function Search() {
  const [results, setResults] = useState([]);
  const { handleSearchChange, searchInput } = useAuth();
  useEffect(() => {
    const urls = [
      "https://arshi365.lamptechs.com/api/admin/products",
      "https://arshi365.lamptechs.com/api/admin/todaysDeal",
    ];

    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => setResults(data))
          .catch((error) => console.log("There was a problem!", error))
      ),
      []
    );
  }, []);

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
    <>
      {results ? (
        <>
          <motion.div
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="container my-4"
            style={{ backgroundColor: "#ffddde" }}
          >
            <motion.div
              variants={stagger}
              className="row    text-center my-2  py-3 "
            >
              {results
                .filter((i) => i.name.toLowerCase().includes(searchInput))
                .map((result, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="col-sm-12 col-md-3  my-2 py-1"
                      >
                        <Link href={`productList/${result.id}`} passHref>
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
                              src={result.image_one}
                              alt="E-COMMERCE  products"
                              className="card-img-top  p-2 "
                              width={336}
                              height={230}
                              layout="responsive"
                            />
                            <div className="card-body">
                              <motion.div
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                className="title"
                              >
                                <h6 className="card-title fs-6 fw-bolder">
                                  {result.name}
                                </h6>{" "}
                              </motion.div>
                              <p
                                className="text-center fs-5 fw-bolder "
                                style={{
                                  color: "#ff8095",
                                  border: 0,
                                }}
                              >
                                ৳{result.price}
                              </p>
                            </div>
                          </motion.div>
                        </Link>
                      </div>
                    </>
                  );
                })}
            </motion.div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="container my-4"
            style={{ backgroundColor: "#ffddde" }}
          >
            <motion.div
              variants={stagger}
              className="row    text-center my-2  py-3 "
            >
              <div className="row    text-center my-2 py-3 ">
                <div className="col-sm-12 col-md-3 ps-2  ">
                  <Skeleton height={250} />{" "}
                  <div>
                    <Skeleton height={30} /> <Skeleton height={30} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 px-3  ">
                  <Skeleton height={250} />{" "}
                  <div>
                    <Skeleton height={30} /> <Skeleton height={30} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 pe-2  ">
                  <Skeleton height={250} />{" "}
                  <div>
                    <Skeleton height={30} /> <Skeleton height={30} />
                  </div>
                </div>
                <div className="col-sm-12 col-md-3 pe-2  ">
                  <div>
                    <Skeleton height={250} />
                    <div>
                      <Skeleton height={30} /> <Skeleton height={30} />
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Search;
