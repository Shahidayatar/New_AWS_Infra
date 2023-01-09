import React from 'react';

import './Modal.css';
import './form.css';

function Modal(props) {
  //return console.log('from Modal, we are reach modaljs file');

  return (
    <div>
      <div className="PopUp">
        <form action="https://formbold.com/s/FORM_ID" method="POST" id="form">
          <div id="formitems">
            <div id="align">
              <h2 className="">Post A JOB </h2>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Company Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="formbold-form-input"
                    required
                  />
                </div>
                <div>
                  <label className="formbold-form-label"> Job title </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="formbold-form-input"
                    required
                  />
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label"> Email </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="formbold-form-input"
                    required
                  />
                </div>
                <div>
                  <label className="formbold-form-label"> Phone number </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="formbold-form-input"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="formbold-form-label">Choose a car: </label>

                <select name="cars" id="cars">
                  <option value="volvo">Hybird</option>
                  <option value="saab">Remote</option>
                  <option value="mercedes">Work from Home</option>
                </select>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Work Location</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="formbold-form-input"
                    required
                  />
                </div>
              </div>

              <div className="formbold-checkbox-wrapper">
                <label className="formbold-checkbox-label">
                  <input type="checkbox" />I agree to the defined
                  <a href="https://policies.google.com/privacy?hl=en-US">
                    terms, conditions, and policies
                  </a>
                </label>
              </div>

              <button className="formbold-btn">Register Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
