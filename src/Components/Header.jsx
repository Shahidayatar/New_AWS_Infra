import { Button } from '@mui/material';
import React from 'react';
import './header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import FormOutPut from './FormOutPut';

const Header = () => {
  const [open, close] = useState(false);
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  const ClickButton = () => {
    close(true);
    navigate('/');
  };
  const CloseButton = () => {
    close(false);
  };

    const handleFormSubmit = (formData) => {
   
    setFormData(formData)
  
  };


  return (
    <div>
      <div className="masterNavBar">
        <Button variant="contained" size="large" onClick={ClickButton}>
          Post Job
        </Button>
        &nbsp; &nbsp;
        <Button variant="contained" onClick={CloseButton}>
          Log In
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained"> Sign Up</Button>
        &nbsp;&nbsp;
        <Button variant="contained"> About Us</Button>
      </div>



<div>{<FormOutPut formData={formData} />}</div>


      
      <div>
        {open ? (
          <div>
            <Modal
              isOpen={open}
              onClose={CloseButton}
              onFormSubmit={handleFormSubmit}
            ></Modal>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
