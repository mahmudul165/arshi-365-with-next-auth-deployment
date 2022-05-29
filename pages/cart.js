import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import useAuth from "../hook/useAuth";
import { useSession, getProviders, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Cart = () => {
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
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100  ">
            <div className="card">
              <div className="row my-3">
                <div className="col-lg-7">
                  <h5 className="my-3">
                    <Link href="/" passHref>
                      <a className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>
                        Continue shopping
                      </a>
                    </Link>
                  </h5>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="mb-1">Shopping cart</p>
                      <p className="mb-0">
                        You have {totalItems} items in {totalUniqueItems} cart.
                      </p>
                    </div>
                    <div>
                      <p className="mb-0">
                        <span className="text-muted">Sort by:</span>{" "}
                        <a href="#!" className="text-body">
                          price <i className="fas fa-angle-down mt-1"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* map */}
                  {items.map((item, index) => {
                    return (
                      <>
                        <div
                          className="card mb-3 mb-lg-0 mt-2  p-1"
                          key={index}
                        >
                          <div className="card-body ">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={item.image_one}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: "65px" }}
                                  />
                                </div>
                                <div className="ms-2">
                                  <h5>{item.name}</h5>
                                  {/* <p className="small mb-0">
                                        1TB, Graphite
                                      </p> */}
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div
                                  className="col-md-3 col-lg-3 col-xl-2 d-flex"
                                  style={{ width: "100px" }}
                                >
                                  <button
                                    className="btn btn-link px-2"
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity - 1
                                      )
                                    }
                                  >
                                    <i className="fas fa-minus"></i>
                                  </button>

                                  <input
                                    name="quantity"
                                    value={item.quantity}
                                    className="form-control form-control-sm"
                                  />

                                  <button
                                    className="btn btn-link px-2"
                                    onClick={() =>
                                      updateItemQuantity(
                                        item.id,
                                        item.quantity + 1
                                      )
                                    }
                                  >
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>

                                <div style={{ width: "90px" }}>
                                  <h5 className="mb-0">{item.price}</h5>
                                </div>
                                <a
                                  href="#!"
                                  style={{ color: "#cecece" }}
                                  onClick={() => removeItem(item.id)}
                                >
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <div className="d-flex justify-content-end my-4">
                    <button
                      onClick={() => emptyCart()}
                      className="btn btn-sm   p-2   my-1 m-1 fs-5 fw-bold mt-4"
                      style={{
                        backgroundColor: "#c53b240d",
                        color: "#FF0099",
                        border: 0,
                      }}
                    >
                      Clear Shopping Cart
                    </button>

                    <button
                      onClick={BuyNow}
                      className="btn btn-sm   p-2   my-1 m-1 fs-5 fw-bold mt-4"
                      style={{
                        backgroundColor: "#c53b240d",
                        color: "#FF0099",
                        border: 0,
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card bg-primary text-white rounded-3 border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Card details</h5>
                        <img
                          src="/images/11.png"
                          className="img-fluid rounded-3"
                          style={{ width: "45px" }}
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
                          <label className="form-label" for="typeName">
                            Cardholder's Name
                          </label>
                        </div>

                        <div className="form-outline form-white mb-4">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            siez="17"
                            placeholder="1234 5678 9012 3457"
                            minlength="19"
                            maxlength="19"
                          />
                          <label className="form-label" for="typeText">
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
                                minlength="7"
                                maxlength="7"
                              />
                              <label className="form-label" for="typeExp">
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
                                minlength="3"
                                maxlength="3"
                              />
                              <label className="form-label" for="typeText">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>

                      {/* <h5 className="text-uppercase mb-3">Give code</h5> */}

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control coupon form-control-lg"
                            name=""
                            placeholder="Apply Cupon code"
                            onChange={(event) => setCupon(event.target.value)}
                          />
                          <label className="form-label" for="form3Examplea2">
                            Enter your code
                          </label>
                        </div>
                      </div>

                      <hr className="my-2" />

                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">
                          {Cupon ? cartTotal - parseInt(Cupon) : cartTotal - 0}{" "}
                          ৳
                        </p>
                      </div>

                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Shipping</p>
                        <p className="mb-2">$20.00</p>
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
                        className="btn btn-info btn-block btn-lg"
                        onClick={BuyNow}
                      >
                        <div className="d-flex justify-content-between">
                          <span className="me-2">
                            {Cupon
                              ? cartTotal - parseInt(Cupon) + 20
                              : cartTotal - 0 + 20}
                            ৳
                          </span>
                          <span>
                            Checkout
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
    </>
  );
};

export default Cart;
