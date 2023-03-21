import React from 'react';

import './Modal.css';
import './form.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Modal({ isOpen, onClose, onFormSubmit }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
     onFormSubmit(formData); 
    onClose(); 
       console.log(formData);
  };

  return (
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                id="job-title"
                label="Job Title"
                name="job_title"
                
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                minRows={6}
                id="job-description"
                label="Job Description"
                name="job_description"
               
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                id="job-location"
                label="Job Location"
                name="job_location"
              
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="number"
                id="job-salary"
                label="Salary"
                name="job_salary"
             
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" className="submitButton">
            Post Job
          </Button>
        </form>
        
      </div>
    </div>
  );
}

export default Modal;
