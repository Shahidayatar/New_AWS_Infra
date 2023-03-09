import React from 'react';

import './Modal.css';
import './form.css';
import {useState} from 'react';

function Modal(props) {

const [formData, setFormData] = useState(false);
 const handleChange = (event) => {
   const { name, value } = event.target;
   setFormData({ ...formData, [name]: value });
 };
  const handleSubmit = (event) => {
    event.preventDefault();
  
     console.log(formData);
  
  };
  return (
    <div>
      <div className="PopUp">
        <form id="form" onSubmit={handleSubmit}>

            <div id="align">
              <h2 className="">Post A JOB </h2>

              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Company Name</label>
                  <input
                    type="text"
                    name="Company Name"
                    id="firstname"
                    className="formbold-form-input"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="formbold-form-label"> Job title </label>
                  <input
                    type="text"
                    name="Job title"
                    id="lastname"
                    className="formbold-form-input"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="formbold-form-label">Work preference: </label>

                <select name="Work Type" id="workType">
                  <option value="Hybird">Hybird</option>
                  <option value="Remote">Remote</option>
                  <option value="Work from Home">Work from Home</option>
                </select>
              </div>
              <div className="formbold-input-flex">
                <div>
                  <label className="formbold-form-label">Work Location</label>
                  <input
                    type="text"
                    name="work prefernce"
                    id="firstname"
                    className="formbold-form-input"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="formbold-checkbox-wrapper">
                <label className="formbold-checkbox-label">
                  <input type="checkbox" required />I agree to the defined
                  <a href="https://policies.google.com/privacy?hl=en-US">
                    terms, conditions, and policies
                  </a>
                </label>
              </div>

              <button type="submit" className="formbold-btn">
                Post a job
              </button>
            </div>
   
        </form>
      </div>
   
    </div>
  );
}



export default Modal;
