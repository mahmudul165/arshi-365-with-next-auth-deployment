import Link from "next/link";
import React from "react";

function ButtonGlobal({ btnname, btnaction }) {
  return (
    <>
      <Link href={btnaction} passHref>
        <button
          className="btn rounded-pill p-2 px-3 my-1 m-1 fs-6 fw-bolder mt-4"
          style={{
            backgroundColor: "white",
            color: "#FF0099",
            border: 0,
          }}
        >
          {btnname}
        </button>
      </Link>
    </>
  );
}

export default ButtonGlobal;
