import React from "react";
import Image from "next/image";
import SignUp from "/public/home/Sign-up.png";
import { useSession, getProviders, signIn, signOut } from "next-auth/react";
import { Router, useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import useAuth from "../hook/useAuth";
import Link from "next/link";

function Login({ providers }) {
  const { data: session } = useSession();
  const { BuyNow, path } = useAuth();
  const router = useRouter();
  //console.log("route from", path);
  //console.log("route current", router.asPath);

  const handleSignin = () => {
    // if (!session) {
    //   await signIn("google");
    //   console.log("data", session.user);
    //   // setTimeout(
    //   //   await function displayHello() {
    //   //     if (session.user?.email) {
    //   //       console.log("data", session.user?.email);
    //   //     }
    //   //   },
    //   //   7000
    //   // );
    //   setTimeout(() => {
    //     console.log("eat");
    //   }, 2000);
    //   console.log("data is", session);
    // }
  };

  // session ? redirect("/payment") : await router.push("/signup");
  //path !== router.asPath ? router.push(router.asPath) : router.push("/");
  return (
    <div className="container my-3 py-3" style={{ backgroundColor: "#F2EBDD" }}>
      <div
        className="container   row m-auto align-items-center 
      justify-content-center mt-4"
      >
        <div className="col-md-6 order-2 order-lg-1">
          <h1
            className="py-2 my-2 fs-1 fw-bolder "
            style={{ color: "#ff8095" }}
          >
            SIGN UP
          </h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">
              never share your email with anyone else.
            </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">
                Repeat Your Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree all statements in Terms of service
              </label>
            </div>

            {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
            <div>
              <button
                className="btn btn-lg rounded-pill p-2 px-3 my-2   "
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
              >
                Register
              </button>
            </div>
          </form>
          {/* log in route */}
          <div>
            <p className="text-muted   mb-0">
              Have already an account?
              <Link href="/login">
                <a className="fw-bold text-body mx-2">
                  <u>login here</u>
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 order-1 order-lg-1">
          <Image
            src={SignUp}
            alt="icon-register"
            width={434}
            height={475}
            className=" ms-1"
          />
        </div>
      </div>
      {/* example */}
      <>
        <div className="d-flex justify-content-center mx-4   me-2">
          {!session ? (
            <>
              <button
                type="button"
                className="btn btn-lg rounded-pill p-2 px-3 my-4 "
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${window.location.origin}${path}`,
                  })
                }
              >
                Facebook
              </button>
              <button
                type="button"
                className="btn btn-lg rounded-pill p-2 px-3 my-4 ms-2"
                style={{
                  backgroundColor: "white",
                  color: "#ff8095",
                  border: 0,
                }}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${window.location.origin}${path}`,
                  })
                }
              >
                Google
              </button>
              {/* env: {
    GOOGLEID:
      "15718943464-1f137o9melpvo03mevc1orf2j2gg7j1a.apps.googleusercontent.com",
    GOOGLESECRET: "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",
  }, */}
            </>
          ) : (
            <>
              <div className="text-center">
                {/* <h3 className="mt-5">
                  {session.user?.email || session.user?.name}
                </h3> */}

                <button
                  type="button"
                  className="btn btn-lg rounded-pill p-2 px-3 my-4 "
                  style={{
                    backgroundColor: "white",
                    color: "#ff8095",
                    border: 0,
                  }}
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
}

export default Login;
