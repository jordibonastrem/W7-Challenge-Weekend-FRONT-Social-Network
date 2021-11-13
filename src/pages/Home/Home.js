import LoginForm from "../../components/LoginForm/Login";
import { loginUserThunk } from "../../redux/thunks/userThunks";

const Home = () => {
  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
};

export default Home;
