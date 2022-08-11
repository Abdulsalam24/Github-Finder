import { useContext, useEffect } from "react";
import UserItem from "../components/UserItem";
import GihubContext from "../context/gihubContext/GithubContext";

function Main() {
  const {users, fetchUser, loading} = useContext(GihubContext);

  useEffect(() => {
    fetchUser();
  }, []);

  return loading ? (
    "Loading ..."
  ) : (
    <div className="container users">
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}

export default Main;
