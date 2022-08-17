import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url} }) {

  return (
    <div className="user-item">
      <div className="user-img">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-login">
        <h4>{login}</h4>
        <Link to={`/user/${login}`}>
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default UserItem;
