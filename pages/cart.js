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
    <section className="container my-4 card  ">
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
          <table className="table  ">
            {/* <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <th scope="row">Apply discount code</th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">Subtotal</th>
                <td>Mark</td>
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
        </div>
      </div>
    </section>
  );
};

export default Cart;
