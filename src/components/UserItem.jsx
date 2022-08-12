import React from "react";
import { useContext } from "react";
import GihubContext from "../context/gihubContext/GithubContext";

function UserItem({ user: { login, avatar_url , id } }) {


  const {viewUser} = useContext(GihubContext)

  return (
    <div className="user-item">
      <div className="user-img">
        <img src={avatar_url} alt="" />
      </div>
      <div className="user-login"><h4>{login}</h4> <span onClick={()=>viewUser(id)}>View Profile</span> </div>
    </div>
  );
}

export default UserItem;
