import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="container">
      {/* <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
         Nationality
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
       <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
         Nationality
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div> */}
      {/* <input
        type="text"
        className="form-control mb-3"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      /> */}

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Nationality
        </label>
        <input
          type="text"
          className="form-control  "
          placeholder="Nationality..."
          value={formData.nationality}
          onChange={(e) => {
            setFormData({ ...formData, nationality: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Others
        </label>
        <input
          type="text"
          className="form-control  "
          placeholder="Other..."
          value={formData.other}
          onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default OtherInfo;
