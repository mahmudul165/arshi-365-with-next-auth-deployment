import React from "react";
import { useState } from "react";
function IncrementDecrement() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <>
      {/* increment decrement */}
      <div
        className="btn-group my-1 py-1    w-25"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn  btn-outline-warning"
          onClick={decNum}
        >
          -
        </button>
        <input
          type="text"
          className="w-50  form-control"
          value={num}
          onChange={handleChange}
        />
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={incNum}
        >
          +
        </button>
      </div>
    </>
  );
}

export default IncrementDecrement;
