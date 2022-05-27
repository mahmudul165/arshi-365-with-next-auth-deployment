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
    <section className="container my-4 card     border-0  rounded">
      <div className="row jistufy-content-center align-items-center  m-auto  ">
        <div className="col-lg-7 col-sm-12 py-2 my-2">
          <h5 className="mb-4">
            Cart ({totalUniqueItems}) Total Item :({totalItems})
          </h5>
          <table className="table table-light   my-3 py-3">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {/* <Image
                        src={item.image_one}
                        alt="product-img"
                        height={400}
                        width={320}
                        layout="responsive"
                      /> */}
                      <img src={item.image_one} style={{ height: "6rem" }} />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.price}</td>

                    <td>Quantity({item.quantity})</td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-sm btn-info ms-1"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn  btn-sm btn-info ms-1"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-sm btn-danger mt-2 "
                      >
                        RemoveItem
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="d-flex justify-content-end">
            <button
              onClick={() => emptyCart()}
              className="btn btn-sm btn-danger ms-2"
            >
              Clear shopping Cart
            </button>
            <button onClick={BuyNow} className="btn btn-sm btn-primary ms-2">
              Buy Now
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 ">
          <h5 className="mt-4 card border-0">Summary</h5>
          <form>
            <div className="form-group">
              <label>Have coupon?</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control coupon"
                  name=""
                  placeholder="Apply Coupon code"
                  onChange={(event) => setCupon(event.target.value)}
                />
                {/* <span className="input-group-append">
                  <button className="btn btn-primary btn-apply coupon">
                    Apply
                  </button>
                </span> */}
              </div>
            </div>
          </form>
          <table className="table  ">
            <tbody>
              <tr>
                <th scope="row">Subtotal</th>
                <td>{cartTotal - parseInt(Cupon)} ৳</td>
              </tr>
              <tr
                className="fs-5 fw-bolder mt-2 "
                style={{
                  color: "#ff8095",
                  border: 0,
                }}
              >
                <th scope="row">Total Price:</th>
                <td>{cartTotal} ৳</td>
              </tr>
            </tbody>
          </table>

          <button
            className="btn btn-lg btn-outline-primary m-auto"
            onClick={BuyNow}
          >
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
