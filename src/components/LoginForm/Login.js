// import { useState, useEffect } from "react";
const LoginForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
