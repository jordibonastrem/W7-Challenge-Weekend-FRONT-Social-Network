import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <LoginPage></LoginPage>
    </>
  );
  // return <Home></Home>;
};
export default App;
