import { useContext, useEffect } from "react";
import Spinner from "../components/Spinner";
import UserItem from "../components/UserItem";
import UserSearch from "../components/UserSearch";
import GihubContext from "../context/githubContext/GithubContext";

function Main() {
  const { users, loading } = useContext(GihubContext);

  return (
    <div className="container">
      <UserSearch />

      {loading ? (
        <Spinner />
      ) : (
        <div className="users">
          {users.map((user) => (
            <UserItem user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
