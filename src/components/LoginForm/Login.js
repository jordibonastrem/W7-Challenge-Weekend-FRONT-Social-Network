import useUser from "../../hooks/useUser";
const LoginForm = () => {
  const initialData = {
    username: "",
    password: "",
  };

  const { loginUser } = useUser(initialData);

  const testData = {
    username: "testuser",
    password: "testpassword",
  };
  loginUser(testData);

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
