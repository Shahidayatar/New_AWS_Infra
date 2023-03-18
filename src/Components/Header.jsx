import { Button } from "@mui/material";
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="masterNavBar">
        <Button variant="contained">Post Job</Button>
        &nbsp; &nbsp;
        <Button variant="contained">Log In</Button>
        &nbsp;&nbsp;
        <Button variant="contained"> Sign Up</Button>
        &nbsp;&nbsp;
        <Button variant="contained"> About Us</Button>
      </div>
    </>
  );
};

export default Header;
