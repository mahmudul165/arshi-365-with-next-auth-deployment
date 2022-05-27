import React from "react";

function contact() {
  return (
    <>
      <div className="container card   fs-1 border-0 bg-light rounded">
        <div
          className="container card my-5 p-5 text-center fs-1 fs-bolder border-0 shadow-lg"
          style={{ width: "60rem" }}
        >
          <h1> Please wait we will come soon</h1>
          {/* separator section added */}

          <small className="my-2 p-2"> Contact with</small>

          <div className="d-flex justify-content-center ">
            <img
              src="/home/icon-facebook.png"
              alt=""
              className="w-25  pe-1 me-3 "
              onClick={() =>
                signIn("google", {
                  callbackUrl: `${window.location.origin}/`,
                })
              }
            ></img>
            <img
              src="/home/icon-google.png"
              alt=""
              className="w-25  "
              onClick={() =>
                signIn("google", {
                  callbackUrl: `${window.location.origin}/`,
                })
              }
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
