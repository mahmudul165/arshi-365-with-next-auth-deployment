import React from "react";
import { useCart } from "react-use-cart";
import useAuth from "../hook/useAuth";

const Cart = () => {
  const { BuyNow } = useAuth();
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
  if (isEmpty) return <h1 className="text-center"> Your cart isEmpty </h1>;
  return (
    <section className="container my-4">
      <div className="row jistufy-content-center">
        <div className="col-12 py-2 my-2">
          <h5 className="mb-4">
            Cart ({totalUniqueItems}) Total Item :({totalItems})
          </h5>
          <table className="table table-light   my-2 ">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
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
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto  mt-2">
            {/* <h2> EGP</h2> */}
            <h2
              className="fs-5 fw-bolder mt-2 "
              style={{
                color: "#ff8095",
                border: 0,
              }}
            >
              Total Price: {cartTotal} ৳
            </h2>
          </div>
        </div>
        <div className="col-auto mb-2  ">
          <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button onClick={BuyNow} className="btn btn-primary ms-2">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
