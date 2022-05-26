import React from "react";
import Image from "next/image";
import SignIn from "/public/home/Sign-in.png";
import Link from "next/link";
function signUp() {
  return (
    <div
      className="container   row m-auto align-items-center 
      justify-content-center  "
      style={{ backgroundColor: "#F2EBDD" }}
    >
      <div className="col-md-6 order-2 order-lg-1">
        <h1 className="py-2 my-2 fs-1 fw-bolder " style={{ color: "#ff8095" }}>
          SIGN IN
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
          {/* <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Repeat Your Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div> */}
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
            className="btn btn-lg rounded-pill p-2 px-3 my-4 "
            style={{
              backgroundColor: "white",
              color: "#ff8095",
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
  );
}

export default signUp;
