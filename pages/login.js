import React from "react";
import Image from "next/image";
import SignIn from "/public/home/Sign-in.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import { useSession, getProviders, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import useAuth from "../hook/useAuth";
import ProductSliderHeader from "../component/Product/ProductSliderHeader";

function Login() {
  const { data: session } = useSession();
  const { BuyNow, path } = useAuth();
  const router = useRouter();
  return (
    <div className="container my-3 py-3" style={{ backgroundColor: "#F2EBDD" }}>
      <div
        className="container   row m-auto align-items-center 
      justify-content-center  "
      >
        <div className="col-md-6 order-2 order-lg-1">
          {/* <h1
            className="py-2 my-2 fs-1 fw-bolder "
            style={{ color: "#ff8095" }}
          >
            SIGN IN
          </h1>  */}

          <ProductSliderHeader catagoryName="SIGN IN" />
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
            <button
              className="btn rounded-pill p-2 px-3 my-1  fs-5 fw-bold "
              style={{
                backgroundColor: "white",
                color: "#FF0099",
                border: 0,
              }}
            >
              Login
            </button>
          </form>
          {/* log in route */}
          <div>
            <p className="text-muted   mb-0">
              Have already an account?
              <Link href="/signup">
                <a className="fw-bold text-body mx-2">
                  <u>sign up here</u>
                </a>
              </Link>
            </p>
          </div>
        </div>

        <div className="col-md-6 order-1 order-lg-1">
          <Image
            src={SignIn}
            alt="icon-register"
            width={434}
            height={475}
            className=" ms-1"
          />
        </div>
      </div>
      {/* separator section added */}
      <p className="fm-sns-title">
        <hr />
        <span className="left"></span>
        <label>Or,login with</label>
        <span className="right"></span> <hr />
      </p>
      {/* login with google and fackbook provider */}
      <div className="d-flex justify-content-center mx-4   me-2">
        {!session ? (
          <>
            <div className="d-flex    ">
              <button
                className="btn   btn-md m-2 "
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${window.location.origin}/`,
                  })
                }
              >
                <img
                  src="/home/facebook_long_button.png"
                  alt=""
                  className="w-75  pe-1   "
                ></img>
              </button>
              <button
                className="btn   btn-sm m-2"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${window.location.origin}/`,
                  })
                }
              >
                <img
                  src="/home/google_long-button.png"
                  alt=""
                  className="w-75  "
                ></img>
              </button>
            </div>
            {/* <FontAwesomeIcon
              icon={faGoogle}
              style={{ fontSize: 100, color: "orange" }}
            /> */}
            {/* <button
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
            </button> */}
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
    </div>
  );
}

export default Login;
