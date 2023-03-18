import { Button } from '@mui/material';
import React from 'react';
import './header.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Header = () => {
  const [open, close] = useState(false);
  const navigate = useNavigate();

  function ClickButton() {
    close(true);
    navigate('/');
  }
   function CloseButton() {
    close(false);
  }

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
      <div>
        {open ? (
          <div>
        
            <div onClick={CloseButton} className="overlay">
             
            </div>
            <div><Modal></Modal>{' '}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
