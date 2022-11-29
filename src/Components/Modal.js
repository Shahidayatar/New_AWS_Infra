import React from 'react';

import './Modal.css';

function Modal(props) {
  //return console.log('from Modal, we are reach modaljs file');

  return (
    <div>
      <div className="PopUp">
        <form className="formPostJob" align="center">
          <label>Job Title</label>
          <input
            type="text"
            className="text-Box"
            placeholder="Job title"
            required
          ></input>

          <label> Company Name</label>
          <input
            type="text"
            className="text-Box"
            placeholder="Company"
            required
          ></input>

          <input type="button" className="da" value="click"></input>
        </form>
      </div>
    </div>
  );
}

export default Modal;
