import { useEffect } from "react";
import User from "../../components/User/User";
import useUserList from "../../hooks/useUserList";
import { useSelector } from "react-redux";

const Home = () => {
  const { usersList, getUsers } = useUserList();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  console.log("Home" + usersList);
  return (
    <>
      {/* {usersList.map((user) => (
        <User key={user.name} user={user}></User>
      ))} */}
    </>
  );
};

export default Home;
