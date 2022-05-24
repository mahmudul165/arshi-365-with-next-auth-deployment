import React from "react";
import { useCart } from "react-use-cart";

function IncrementDecrement() {
  const { items, updateItemQuantity } = useCart();
  const result = items.filter((item) => item.id == Data.id);
  console.log(" items array is", items);
  return (
    <div>
      {result.map((item, index) => (
        <tr key={index}>
          <td>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="btn btn-sm btn-info ms-1"
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="btn  btn-sm btn-info ms-1"
            >
              +
            </button>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default IncrementDecrement;
