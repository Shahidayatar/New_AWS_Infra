
import React from "react";

function FormOutPut({ formData }) {

 const arrayOfPosts = []
 arrayOfPosts.push(formData)
 console.log(arrayOfPosts)
 
  return (

  <div>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          {key}: {formData[key]}
        </div>
      ))}
  </div>
  

  );
}
export default FormOutPut;
