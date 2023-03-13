/* eslint-disable react/jsx-pascal-case */
import './Button.css';
import Modal from '../Components/Modal';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


function Button() {
  const navigate = useNavigate(); //used for routing

  const [open, close] = useState(false);
  function ClickButton() {
    close(true);
    navigate('/');
    // our logic is simple when this button is clicked the usestate value will change to true and will return output
  }
  function CloseButton() {
    close(false);
  }

  // this if for navigation of 4  buttons
  function navToSignup() {
    navigate('/signup');
  }
  function navToContact() {
    navigate('/about'); 
  }
 
  return (
    <div>
      <div id="container">
        <button id="button_to_nav" onClick={ClickButton}>
          Post A Job
        </button>
        <button id="button_to_nav" onClick={CloseButton}>
          Login
        </button>
        <button id="button_to_nav" onClick={navToSignup}>
          Signup
        </button>
        <button id="button_to_nav" onClick={navToContact}>
          About us
        </button>

        <div>
          {open ? (
           <div> <div onClick={CloseButton} className="overlay">    </div>
              <Modal></Modal>{' '}
        </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Button;
