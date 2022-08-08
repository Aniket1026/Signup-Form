import React from "react";
import { Link } from "react-router-dom";

import "./Form.css";

const Form = () => {
  return (
    <form>
      <div className="form">
        <section className="field1">
          <p>Full Name</p>
          <div className="first-name">
            <label>First name</label>
            <input type="text" required />
          </div>
          <div className="last-name">
            <label>Last Name</label>
            <input type="text" required />
          </div>
        </section>
        <section className="field2">
          <p>Phone Number</p>
          <div className="number-field">
            <label>like : 987654321</label>
            <input type="text" required />
          </div>
        </section>
        <section className="field3">
          <p>Email</p>
          <div className="email-field">
            <label>like: mangu@gmail.com</label>
            <input required />
          </div>
        </section>
        <section className="field4">
          <p> Delivery Adress</p>
          <div className="address-field">
            <div className="address1">
              <label>street address</label>
              <input required />
            </div>
            <div className="address2">
              <label>street address line 2</label>
              <input required />
            </div>
            <div className="city-field">
              <div className="city">
                <label>city</label>
                <input required />
              </div>
              <div className="postal">
                <label>Postal/Zone</label>
                <input required />
              </div>
            </div>
            <div className="postal-code">
              <label>postal/zip code</label>
              <input required />
            </div>
          </div>
        </section>
        <div className='button'>
        <Link to='/submit'>
          <button>Next</button>
        </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
