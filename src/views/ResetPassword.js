import React from "react";

const ResetPassword = () => {
  return (
    <div className="ResetPassword">
      <div className="ResetPassword-title">
        <h1>Lost your password?</h1>
      </div>

      <div className="ResetPassword-description">
        <p>
          Change your password following instructions below. This helps to keep
          your new password secure.
        </p>
      </div>

      <div className="ResetPassword-list">
        <ul>
          <li>
            <span>1.</span> Please enter your username or email address.
          </li>
          <li>
            <span> 2.</span>
            You will receive a link to create a new password via email.
          </li>
        </ul>
      </div>

      <div className="card">
        <form style={{ padding: "1rem" }}>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Username or email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <button className="ResetPassword-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
