import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const useGlobal = () => {
  const [path, setpath] = useState({});
  const { data: session } = useSession();
  const router = useRouter();

  const signInUsingGoogle = () => {};

  const logOut = () => {};

  // router.push("/signin", router.pathname);
  //router.pathname !== router.asPath ? router.push(router.asPath) : router.push("/")

  const BuyNow = async () => {
    !session
      ? await router.push("/signup", setpath(router.asPath))
      : await router.push("/payment");
    //console.log("path name from", router.pathname);
    //console.log("check route", router);

    //path!== router.asPath ? router.push(router.asPath) : router.push("/")
  };
  // products list

  return { session, signInUsingGoogle, logOut, BuyNow, path };
};

export default useGlobal;
