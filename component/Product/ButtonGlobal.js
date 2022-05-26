import Link from "next/link";
import React from "react";

function ButtonGlobal({ btnname, btnaction }) {
  return (
    <>
      <Link href={btnaction} passHref>
        <button
          className="btn rounded-pill p-2 px-3 my-3"
          style={{
            backgroundColor: "white",
            color: "#ff8095",
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
