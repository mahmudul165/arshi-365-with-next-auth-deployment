import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Shipping", "Payment", "Completed"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form container">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          {/* <h1>{FormTitles[page]}</h1> */}
          <h1 className="p-2 fs-1 fw-bolder  " style={{ color: "#ff8095" }}>
            {FormTitles[page]}
          </h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        {/* <div className="footer mt-5 btn btn-group">
          <button
            className="btn btn-warning rounded"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className="ms-4 btn btn-warning  rounded"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div> */}
        {/* test  */}
        <div>
          <div className="my-4  btn-group btn-group-lg" role="group">
            <button
              className="col btn    rounded-pill px-4"
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="col btn   rounded-pill  ms-2 px-4"
              style={{
                backgroundColor: "white",
                color: "#ff8095",
                border: 0,
              }}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
        {/* tst end */}
      </div>
    </div>
  );
}

export default Form;
