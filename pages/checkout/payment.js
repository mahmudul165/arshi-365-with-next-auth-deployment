import Image from "next/image";
import Link from "next/link";
import React, { PureComponent, useState } from "react";
import { useCart } from "react-use-cart";

import { useSession, getProviders, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import useAuth from "../../hook/useAuth";

const Payment = () => {
  const handlepayment = () =>
    alert("Thank you!! Your order completed. please check your mail");
  const [Cupon, setCupon] = useState({});

  const { data: session } = useSession();
  const { BuyNow, path } = useAuth();
  const router = useRouter();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const buy = () => {
    alert("upcoming ");
  };
  if (isEmpty)
    return (
      <div className="container card   fs-1 border-0 bg-light rounded">
        <div
          className="container card my-5 p-5 text-center fs-1 fs-bolder border-0 shadow-lg"
          style={{ width: "60rem" }}
        >
          <small>Your cart is Empty</small>
          {/* separator section added */}
          <p className="fm-sns-title">
            <span className="left">
              <hr />
            </span>

            <label>Or,login with</label>
            <span className="right">
              <hr />
            </span>
          </p>
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
    );
  return (
    <>
      {session ? (
        <section className="h-100 h-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100  ">
              <div className="card">
                <div className="row my-3">
                  <div className="col-lg-7">
                    <h5 className="my-3">
                      <Link href="/productList" passHref>
                        <a className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </Link>
                    </h5>
                    <hr />
                    <div>
                      <h4 className="small mb-2 fs-6 fw-bolder">
                        Select Your Payment Method
                      </h4>
                      <a
                        href="#!"
                        type="submit"
                        className="text-primary fs-3 fw-bolder"
                      >
                        <i className="fab fa-cc-mastercard fa-2x me-2  "></i>
                      </a>
                      <a href="#!" type="submit" className="text-primary fs-3">
                        <i className="fab fa-cc-visa fa-2x me-2"></i>
                      </a>
                      <a href="#!" type="submit" className="text-primary fs-3">
                        <i className="fab fa-cc-amex fa-2x me-2"></i>
                      </a>
                      <a href="#!" type="submit" className="text-primary fs-3">
                        <i className="fab fa-cc-paypal fa-2x"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="card    text-white rounded-3 border-0"
                      style={{
                        backgroundColor: "#800080",
                      }}
                    >
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h5 className="mb-0">Order Summary</h5>
                        </div>

                        {/* <h5 className="text-uppercase mb-3">Give code</h5> */}

                        <hr className="my-2" />

                        <div className="d-flex justify-content-between">
                          <small className="mb-2">Subtotal</small>
                          <small className="mb-2">
                            {Cupon
                              ? cartTotal - parseInt(Cupon)
                              : cartTotal - 0}{" "}
                            ৳
                          </small>
                        </div>

                        <div className="d-flex justify-content-between">
                          <small className="mb-2">Shipping</small>
                          <small className="mb-2">$20.00</small>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total(Incl. taxes)</p>
                          <p className="mb-2">
                            {Cupon
                              ? cartTotal - parseInt(Cupon) + 20
                              : cartTotal - 0 + 20}
                            ৳
                          </p>
                        </div>

                        <button
                          type="button"
                          className="btn   btn-block btn-lg"
                          style={{
                            backgroundColor: "#ffff",
                            color: "#FF0099",
                            border: 0,
                          }}
                          onClick={handlepayment}
                        >
                          <div className="d-flex justify-content-between">
                            <span className="me-2">
                              {Cupon
                                ? cartTotal - parseInt(Cupon) + 20
                                : cartTotal - 0 + 20}
                              ৳
                            </span>
                            <span>
                              Pay Now
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="container card my-5 py-5 fs-1 border-0 bg-light rounded">
          <h1 className="container card my-5 py-5 text-center fs-1 fs-bolder border-0 shadow-lg">
            Protected Route Please Authenticate
          </h1>
        </div>
      )}
    </>
  );
};

export default Payment;

{
  /* <div className="col-lg-5">
  <div
    className="card   text-white rounded-3 border-0"
    style={{
      backgroundColor: "#800080",
    }}
  >
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Card details</h5>
        <img
          src="/images/11.png"
          className="img-fluid rounded-3"
          style={{ width: "65px" }}
          alt="Avatar"
        />
      </div>

      <p className="small mb-2">Card type</p>
      <a href="#!" type="submit" className="text-white">
        <i className="fab fa-cc-mastercard fa-2x me-2"></i>
      </a>
      <a href="#!" type="submit" className="text-white">
        <i className="fab fa-cc-visa fa-2x me-2"></i>
      </a>
      <a href="#!" type="submit" className="text-white">
        <i className="fab fa-cc-amex fa-2x me-2"></i>
      </a>
      <a href="#!" type="submit" className="text-white">
        <i className="fab fa-cc-paypal fa-2x"></i>
      </a>

      <form className="mt-4">
        <div className="form-outline form-white mb-4">
          <input
            type="text"
            id="typeName"
            className="form-control form-control-lg"
            siez="17"
            placeholder="Cardholder's Name"
          />
          <label className="form-label" htmlFor="typeName">
            {`Cardholder's Name`}
          </label>
        </div>

        <div className="form-outline form-white mb-4">
          <input
            type="text"
            id="typeText"
            className="form-control form-control-lg"
            siez="17"
            placeholder="1234 5678 9012 3457"
            minLength="19"
            maxLength="19"
          />
          <label className="form-label" htmlFor="typeText">
            Card Number
          </label>
        </div>

        <div className="row mb-4 gx-0 ">
          <div className="col-md-6">
            <div className="form-outline form-white">
              <input
                type="text"
                id="typeExp"
                className="form-control form-control-lg"
                placeholder="MM/YYYY"
                size="7"
                minLength="7"
                maxLength="7"
              />
              <label className="form-label" htmlFor="typeExp">
                Expiration
              </label>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="form-outline form-white">
              <input
                type="password"
                id="typeText"
                className="form-control form-control-lg"
                placeholder="&#9679;&#9679;&#9679;"
                size="1"
                minLength="3"
                maxLength="3"
              />
              <label className="form-label" htmlhtmlFor="typeText">
                Cvv
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="mb-5">
        <div className="form-outline">
          <input
            type="text"
            className="form-control coupon form-control-lg"
            name=""
            placeholder="Apply Cupon code"
            onChange={(event) => setCupon(event.target.value)}
          />
          <label className="form-label" htmlFor="form3Examplea2">
            Enter your code
          </label>
        </div>
      </div>

      <hr className="my-2" />

      <div className="d-flex justify-content-between">
        <p className="mb-2">Subtotal</p>
        <p className="mb-2">
          {Cupon ? cartTotal - parseInt(Cupon) : cartTotal - 0} ৳
        </p>
      </div>

      <div className="d-flex justify-content-between">
        <p className="mb-2">Shipping</p>
        <p className="mb-2">$20.00</p>
      </div>

      <div className="d-flex justify-content-between mb-4">
        <p className="mb-2">Total(Incl. taxes)</p>
        <p className="mb-2">
          {Cupon ? cartTotal - parseInt(Cupon) + 20 : cartTotal - 0 + 20}৳
        </p>
      </div>

      <button
        type="button"
        className="btn   btn-block btn-lg"
        style={{
          backgroundColor: "#ffff",
          color: "#FF0099",
          border: 0,
        }}
        onClick={BuyNow}
      >
        <div className="d-flex justify-content-between">
          <span className="me-2">
            {Cupon ? cartTotal - parseInt(Cupon) + 20 : cartTotal - 0 + 20}৳
          </span>
          <span>
            Checkout
            <i className="fas fa-long-arrow-alt-right ms-2"></i>
          </span>
        </div>
      </button>
    </div>
  </div>
</div>; */
}
