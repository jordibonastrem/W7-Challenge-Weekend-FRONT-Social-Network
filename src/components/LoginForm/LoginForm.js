import useUser from "../../hooks/useUser";
import { useState, useEffect } from "react";
const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const { loginUser } = useUser(initialUser);
  const [user, setUser] = useState(initialUser);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(user.username === "" || user.password === "");
  }, [user.username, user.password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(user);
  };
  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          placeholder="Username"
          type="text"
          className="form-control"
          onChange={handleOnChange}
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          type="password"
          className="form-control"
          onChange={handleOnChange}
          id="password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={buttonDisabled}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
