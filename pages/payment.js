import React from "react";
import Form from "../component/MultiStepform/Form";
import { useSession, signIn, signOut } from "next-auth/react";
function Payment() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div
          className="container p-2 my-2"
          style={{ backgroundColor: "#F2EBDD" }}
        >
          <Form />
        </div>
      ) : (
        <div className="container card my-5 py-5 fs-1 border-0 bg-light rounded">
          <h1 className="container card my-5 py-5 text-center fs-1 fs-bolder border-0 shadow-lg">
            Protected Route Please Authenticate
          </h1>
        </div>
      )}
    </>
  );
}

export default Payment;
