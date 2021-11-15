import { useEffect } from "react";
import User from "../../components/User/User";
import useUserList from "../../hooks/useUserList";
// import { useSelector } from "react-redux";

const Home = () => {
  const { users, getUsers } = useUserList();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </>
  );
};

export default Home;
