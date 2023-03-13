import React from 'react';

import './Modal.css';
import './form.css';
import { useState } from 'react';

function Modal(props) {
  const [formData, setFormData] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    
  
  event.preventDefault();
  };
  return (
    <div>
      <div className="modalContainer">
        <form onSubmit={handleSubmit}>
          <h2>
            Job Posting
            <button className="closeBtn" >X</button>
          </h2>
          <div className="form-group">
            <label htmlFor="job_title">Job Title</label>
            <input type="text" id="job_title" name="job_title" required />
          </div>
          <div className="form-group">
            <label htmlFor="company_name">Company Name</label>
            <input type="text" id="company_name" name="company_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="job_description">Job Description</label>
            <textarea
              id="job_description"
              name="job_description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="job_requirements">Job Requirements</label>
            <textarea
              id="job_requirements"
              name="job_requirements"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="job_location">Job Location</label>
            <input type="text" id="job_location" name="job_location" required />
          </div>
          <div className="form-group">
            <label htmlFor="job_type">Job Type</label>
            <select id="job_type" name="job_type" required>
              <option value="">--Select--</option>
              <option value="full_time">Full-time</option>
              <option value="part_time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input type="text" id="salary" name="salary" />
          </div>
          <button type="submit">Post Job</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
