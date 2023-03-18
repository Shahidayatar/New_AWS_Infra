/* eslint-disable react/jsx-pascal-case */
import './Button.css';
import Modal from '../Components/Modal';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

export const mufunc = () => {
  return <div>'There</div>;
};

const Layout = (props) => {
  const navigate = useNavigate(); //used for routing

  const [open, close] = useState(false);

  function ClickButton() {
    close(true);

    navigate('/');
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
      <div id="positions">
        <Button id="button_to_nav" onClick={ClickButton} variant="contained">
          Post A Job
        </Button>
        <Button id="button_to_nav" onClick={CloseButton} variant="contained">
          Login
        </Button>
        <Button id="button_to_nav" onClick={navToSignup} variant="contained">
          Signup
        </Button>
        <Button id="button_to_nav" onClick={navToContact} variant="contained">
          About us
        </Button>
      </div>

      <div>
        {open ? (
          <div>
            <div onClick={CloseButton} className="overlay"></div>
            <Modal></Modal>
          </div>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Layout;
