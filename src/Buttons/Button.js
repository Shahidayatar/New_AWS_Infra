import './Button.css';

import Modal from '../Components/Modal';
import { useState } from 'react';

let array = ['Post A Job', 'Login', 'Signup', 'About Us'];

function Button() {
  const [open, close] = useState(false);
  function ClickButton() {
    close(true);
    // our logic is simple when this button is clicked the usestate value will change to true and will return output
  }
  function CloseButton() {
    close(false);
  }

  return (
    <div>
      <button onClick={ClickButton}> {array[0]}</button>
      <button onClick={CloseButton}> {array[1]}</button>
      <button> {array[2]}</button>
      <button> {array[3]}</button>
      <div> {open ? <Modal></Modal> : null}</div>
    </div>
  );

  //  return (
  //    <div>
  //      <button onClick={() => close(true)}> {array[0]}</button>

  //      <button onClick={() => close(false)}> {array[1]}</button>
  //      <button> {array[2]}</button>
  //      <button> {array[3]}</button>
  //      {open ? <Modal /> : console.log(open.valueOf, close)}
  //      {open ? <Modal /> : console.log(open, close)}
  //    </div>
  //  );
}

export default Button;
