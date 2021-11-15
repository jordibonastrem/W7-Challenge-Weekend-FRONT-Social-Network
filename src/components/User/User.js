import useUser from "../../hooks/useUser";

const User = ({ user }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={user.photo} alt="user" />
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{useUser.bio}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default User;
