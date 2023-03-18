import React from 'react';

import './Modal.css';
import './form.css';

import { useState } from 'react';
import Button from '@mui/material/Button';

import FormOutPut from './FormOutput';
import { Form } from 'react-router-dom';

function Modal(props) {
  const [formData, setFormData] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    

 
    
  };



  const handleSubmit = (event) => {
      event.preventDefault();
            console.log(formData);
   return(
<div>
 
     <FormOutPut />;
   </div>
   );
   


   

  }
  return (
    <div>
      <div className="modalContainer">
        <form onSubmit={handleSubmit}>
          <h2>
            Job Posting
            <button className="closeBtn">X</button>
          </h2>
          <div className="form-group">
            <label htmlFor="job_title">Job Title</label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="job_description">Job Description</label>
            <textarea
              id="job_description"
              name="job_description"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="job_requirements">Job Requirements</label>
            <textarea
              id="job_requirements"
              name="job_requirements"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="job_location">Job Location</label>
            <input type="text" id="job_location" name="job_location" required />
          </div>
          <div className="form-group">
            <label htmlFor="job_type" name="job type">
              Job Type
            </label>
            <select
              id="job_type"
              name="job_type"
              onChange={handleChange}
              required
            >
              <option value="">--Select--</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input
              type="text"
              id="salary"
              name="salary"
              onChange={handleChange}
            />
          </div>
          <Button variant="contained" type = "submit"  >Post a Job</Button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
