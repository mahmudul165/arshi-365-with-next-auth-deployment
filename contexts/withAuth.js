import { Router, useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const { data: session } = useSession();
    const router = useRouter();
    //  const [verified, setVerified] = useState(false);
    useEffect(async () => {
      // if no accessToken was found,then we redirect to "/" page.
      // router.push("/signin", router.pathname);
      //router.pathname !== router.asPath ? router.push(router.asPath) : router.push("/")

      if (!session) {
        //    Router.push({
        //          pathname: '/signup',
        //          query: { from: {router.pathname} },
        //    })
        console.log("from route", router.pathname);
        router.push("/signin", router.pathname);
      } else {
        router.push("/payment");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
  return null;
};

export default withAuth;

// useEffect(async () => {
//   const accessToken = localStorage.getItem("accessToken");
//   // if no accessToken was found,then we redirect to "/" page.
//   if (!accessToken) {
//     Router.replace("/");
//   } else {
//     // we call the api that verifies the token.
//     const data = await verifyToken(accessToken);
//     // if token was verified we set the state.
//     if (data.verified) {
//       setVerified(data.verified);
//     } else {
//       // If the token was fraud we first remove it from localStorage and then redirect to "/"
//       localStorage.removeItem("accessToken");
//       Router.replace("/");
//     }
//   }
// }, []);

// if (verified) {
//   return <WrappedComponent {...props} />;
// } else {
//   return null;
// }
