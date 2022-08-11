import React from "react";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="user-item">
      <div className="user-img">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-login"><h4>{login}</h4> <span>View Profile</span> </div>
    </div>
  );
}

export default UserItem;
