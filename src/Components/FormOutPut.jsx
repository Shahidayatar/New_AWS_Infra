function FormOutPut({ formData }) {
  return (
    <div className="form-output">
      <h2>Job Details</h2>

      <div className="form-data">
        <p className="label">Job Title:</p>
        <p className="value">{formData.job_title}</p>
      </div>

      <div className="form-data">
        <p className="label">Job Description:</p>
        <p className="value">{formData.job_description}</p>
        <p className="value">{formData.job_description}</p>
      </div>

      <div className="form-data">
        <p className="label">Job Description:</p>
        <p className="value">{formData.job_location}</p>
      </div>

      <div className="form-data">
        <p className="label">Salary:</p>
        <p className="value">{formData.job_salary} PLN</p>
      </div>

     
    </div>
  );
}
export default FormOutPut;
