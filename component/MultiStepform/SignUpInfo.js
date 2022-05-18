import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          aria-label="First name"
          placeholder="First name"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Type your address"
          value={formData.address}
          onChange={(event) =>
            setFormData({ ...formData, address: event.target.value })
          }
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputState" className="form-label">
          Devision
        </label>
        <select
          id="inputState"
          className="form-select"
          value={formData.devision}
          onChange={(event) =>
            setFormData({ ...formData, devision: event.target.value })
          }
        >
          <option selected>Choose...</option>
          <option>Dhaka</option>
          <option>Barisal</option>
          <option>Sylhet</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="inputState" className="form-label">
          City
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Habiganj</option>
          <option>Dhanmondi</option>
          <option>Madhabpur</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="inputState" className="form-label">
          Area
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Dhaka</option>
          <option>Barisal</option>
          <option>Sylhet</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="inputState" className="form-label">
          Country
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>Bangladesh</option>
          <option>India</option>
          <option>Sirlanka</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="inputAddress" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="01712340165"
        />
        <div id="phoneHelp" className="form-text">
          please add number without country code.
        </div>
      </div>
      {/* <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      /> */}
    </div>
  );
}

export default SignUpInfo;
