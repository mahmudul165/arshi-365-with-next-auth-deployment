// import React, { useEffect, useState } from "react";

// import { useSpring, animated } from "react-spring";
// import Image from "next/image";
// import Link from "next/link";
// const Products = () => {
//   // store fetch data
//   const [Products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://intense-caverns-52774.herokuapp.com/packages")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   console.log("testing data from apiAction", Products);
//   return (
//     <div className="container">
//       <h3 className="fs-1 fw-bolder pt-3" style={{ color: "#ff8095" }}>
//         Top selected
//       </h3>
//       <div className="row    text-center my-2 py-2 ">
//         {Products.map((product) => (
//           <>
//             <Link href={`products/${product._id}`}>
//               <div className="col-sm-12 col-md-4 p-2  ">
//                 <div className="card border-0 " style={{ width: "22rem" }}>
//                   <Image
//                     src="/images/jacket-1.png"
//                     alt="E-COMMERCE  products"
//                     className="card-img-top  p-2  "
//                     width={336}
//                     height={336}
//                   />
//                   <div className="card-body">
//                     <h6 className="card-title fs-6 fw-bolder">
//                       {product.name}
//                     </h6>
//                     <p
//                       className="text-center fs-5 fw-bolder "
//                       style={{
//                         color: "#ff8095",
//                         border: 0,
//                       }}
//                     >
//                       ৳{product.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";
// import StarRating from "../../component/StarRating";
// import IncrementDecrement from "../../component/IncrementDecrement";
// import SignIn from "/public/home/Sign-in.png";
// const BlogDetails = () => {
//   const [details, setDetails] = useState([]);
//   const router = useRouter();
//   const { slug } = router.query;
//   // console.log("pid is ", slug);

//   useEffect(() => {
//     fetch(`https://intense-caverns-52774.herokuapp.com/packages/${slug}`)
//       .then((res) => res.json())
//       .then((data) => setDetails(data));
//   }, []);

//   //console.log("details is", details);
//   const { _id, name, price, description, img } = details;
//   console.log("img", details.img);
//   return (
//     <div
//       className="container   row m-auto align-items-center
// justify-content-center my-3"
//       style={{ backgroundColor: "#F2EBDD" }}
//     >
//       <div className="col-md-6 p-3">
//         {/* {`products/${product._id}`} */}
//         {/* <Image
//           src={`${details.img}`}
//           alt="product-img"
//           width={434}
//           height={475}
//           className=" ms-1"
//         /> */}
//         {/* test */}
//         <Image
//           src={SignIn}
//           alt="product-img"
//           width={434}
//           height={475}
//           className=" ms-1"
//         />
//       </div>
//       <div className="col-md-6 p-3">
//         <h1 className="py-2 my-2 fs-1 fw-bolder " style={{ color: "#ff8095" }}>
//           {name}
//         </h1>
//         <p>{description}</p>
//         <div className="text-warning">
//           {/*  star */}
//           <StarRating />
//           {/* review */}
//           <small> 1 Review</small>
//           <small className="ms-2">| Add your Review</small>
//         </div>
//         <p
//           className="fs-5 fw-bolder mt-2 "
//           style={{
//             color: "#ff8095",
//             border: 0,
//           }}
//         >
//           ৳ {price}
//         </p>
//         <p> Earn 5 Club Points</p>
//         {/* increment decrement */}
//         <IncrementDecrement />
//         <div>
//           <div className="my-2  btn-group btn-group-sm" role="group">
//             <button
//               className="col btn btn-sm  rounded-pill p-2"
//               style={{
//                 backgroundColor: "white",
//                 color: "#ff8095",
//                 border: 0,
//               }}
//             >
//               ADD TO CART
//             </button>
//             {/*href={`products/${_id}'/payment'`}*/}
//             <Link href="/payment">
//               <button
//                 className="col btn btn-sm  rounded-pill  ms-2 p-2"
//                 style={{
//                   backgroundColor: "white",
//                   color: "#ff8095",
//                   border: 0,
//                 }}
//               >
//                 BUY NOW
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import React from "react";

function index() {
  return <div>index</div>;
}

export default index;
