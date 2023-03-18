import React from "react";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
const Form = () => {
  return (
    <>
      <Paper>
        <TextField
          id=""
          label="Company Name"
          type="string"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="jobTitle"
          label="Job Title"
          type="string"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="email"
          label="E-mail"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Paper>
    </>
  );
};

export default Form;
