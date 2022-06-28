import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { useCart } from "react-use-cart";
import axios, { Axios } from "axios";
import Skeleton from "react-loading-skeleton";
//import ProductsShowcase from "../../component/Product/ProductsShowcase";
import dynamic from "next/dynamic";
const ProductsShowcase = dynamic(
  () => import("/component/Product/ProductsShowcase"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Products = () => {
  const { addItem } = useCart();
  const { data, error } = useSWR(
    "https://arshi365.lamptechs.com/api/admin/products",
    // { fetcher: async (url) => await fetch(url).then((res) => res.json()) }
    { fetcher: async (url) => await axios.get(url).then((res) => res.data) }
  );

  return <ProductsShowcase data={data} addItem={addItem} />;
};

export default Products;
