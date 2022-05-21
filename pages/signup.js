import React from "react";
import Image from "next/image";
import SignUp from "/public/home/Sign-up.png";

import { useSession, signIn, signOut } from "next-auth/react";
function login() {
  const { data: session } = useSession();
  // console.log(useSession());
  // const handleSignIn = (platfrom) => {
  //   event.preventDefault();
  //   value === "influencer" || value === "brand"
  //     ? signIn(platfrom)
  //     : alert("An example warning alert with an icon ");
  // };
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
              <label htmlFor="exampleInputPassword1" className="form-label">
                Repeat Your Password
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
            {/* <button type="submit" className="btn btn-primary">
            Submit
          </button> */}
            <button
              className="btn btn-lg rounded-pill p-2 px-3 my-4 "
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
            >
              Register
            </button>
          </form>
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
                onClick={() => signIn("google")}
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
                <h3 className="mt-5">
                  {session.user?.email || session.user?.name}
                </h3>
                <button
                  type="button"
                  className="btn btn-primary btn-lg me-5 "
                  onClick={() => signOut()}
                >
                  signOut
                </button>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
}

export default login;
