import useUser from "../../hooks/useUser";
import "./User.css";
const User = ({ user }) => {
  return (
    <div class="card">
      <img class="card-img-top" src={user.img} alt="user" />
      <div class="card-body">
        <h5 class="card-title">{user.name}</h5>
        <p class="card-text">{useUser.bio}</p>
        {/* <a href="#" class="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default User;
