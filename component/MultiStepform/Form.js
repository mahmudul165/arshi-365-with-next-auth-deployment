import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    devision: "",
    city: "",
    area: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Shipping Address", "Payment", "Select Payment Method"];

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
    <div className=" ">
      {" "}
      <div className="form container   ">
        {/* <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-warning"
        style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
      ></div>
    </div> */}
        {/* test */}
        <div
          className="progress rounded-pill mt-5 mb-3"
          style={{ height: "5px" }}
        >
          <div
            className="progress-bar  "
            role="progressbar"
            style={{ width: page === 0 && "33.3%", backgroundColor: "#6a1b9a" }}
          ></div>
          <div
            className="progress-bar  "
            role="progressbar"
            style={{ width: page === 1 && "66.6%", backgroundColor: "#6a1b9a" }}
          ></div>
          <div
            className="progress-bar  "
            role="progressbar"
            style={{ width: page === 2 && "100%", backgroundColor: "#6a1b9a" }}
          ></div>
        </div>
        <div className="form-container w-75 m-auto">
          <div className="header">
            {/* <h1>{FormTitles[page]}</h1> */}
            <h6
              className="p-2  mb-2 fs-4 fw-bolder  "
              style={{ color: "#FF0099" }}
            >
              {FormTitles[page]}
            </h6>
          </div>
          <div className="body card p-3 border-0  ">{PageDisplay()}</div>

          {/* test  */}
          <div>
            <div className="my-4  btn-group btn-group-lg" role="group">
              <button
                className="col btn    rounded-pill px-4"
                style={{
                  backgroundColor: "white",
                  color: "#FF0099",
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
                  color: "#FF0099",
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
    </div>
  );
}

export default Form;
