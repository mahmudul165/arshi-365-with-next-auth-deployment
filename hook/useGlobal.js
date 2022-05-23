import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const useGlobal = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const signInUsingGoogle = () => {};

  const logOut = () => {};
  const BuyNow = () => {
    session ? router.push("/payment") : router.push("/signup");
  };

  return {
    session,
    signInUsingGoogle,
    logOut,
    BuyNow,
  };
};

export default useGlobal;
