import { useContext, useEffect } from "react";
import UserItem from "../components/UserItem";
import UserSearch from "../components/UserSearch";
import GihubContext from "../context/gihubContext/GithubContext";

function Main() {
  const { users, loading } = useContext(GihubContext);

  return loading ? (
    "Loading LOADING ..."
  ) : (
    <div className="container">
      <UserSearch />

      <div className="users">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default Main;
