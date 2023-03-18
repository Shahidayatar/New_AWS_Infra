// /* eslint-disable react/jsx-pascal-case */
// import "./Button.css";
// import Modal from "../Components/Modal";
// import { useState } from "react";
// import FormOutput from "../Components/FormOutput";
// import { useNavigate } from "react-router-dom";
// import Form from "../Components/Form";

// function Button() {
//   const navigate = useNavigate(); //used for routing

//   const [open, close] = useState(false);
//   function ClickButton() {
//     close(true);
//     navigate("/");
//     // our logic is simple when this button is clicked the usestate value will change to true and will return output
//   }
//   function CloseButton() {
//     close(false);
//   }

//   // this if for navigation of 4  buttons
//   function navToSignup() {
//     navigate("/signup");
//   }
//   function navToContact() {
//     navigate("/about");
//   // }
//   // return (
//   //   <div>
//   //     <div id="container">
//   //       <button id="button_to_nav" onClick={() => console.log('hey'), {<Form />}}>
//   //         Post A Job
//   //       </button>
//   //       <button id="button_to_nav" onClick={CloseButton}>
//   //         Login
//   //       </button>
//   //       <button id="button_to_nav" onClick={navToSignup}>
//   //         Signup
//   //       </button>
//   //       <button id="button_to_nav" onClick={navToContact}>
//   //         About us
//   //       </button>
//   //     </div>
//   //     <div> {open ? <Modal></Modal> : null}</div>
//   //     <FormOutput></FormOutput>
//   //   </div>
//   // );
//   //  return (
//   //    <div>
//   //      <button onClick={() => close(true)}> {array[0]}</button>

//   //      <button onClick={() => close(false)}> {array[1]}</button>
//   //      <button> {array[2]}</button>
//   //      <button> {array[3]}</button>
//   //      {open ? <Modal /> : console.log(open.valueOf, close)}
//   //      {open ? <Modal /> : console.log(open, close)}
//   //    </div>
//   //  );
// }

// export default Button;
