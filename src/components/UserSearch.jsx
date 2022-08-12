import React, { useContext, useState } from "react";
import GihubContext from "../context/gihubContext/GithubContext";
import Button from "../shared/Button";

function UserSearch() {
  const { users, searchUser, clearUser } = useContext(GihubContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please type a Github username");
    } else {
      searchUser(text);
      setText("");
    }
  };

  const handleClear = () => {
    clearUser();
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search For Github ..."
            onChange={handleChange}
            value={text}
          />
          <Button absolute="absolute" type="submit" >
            <button onClick={handleSubmit}>
            Search
            </button>
          </Button>
        </div>
      </form>
      {users.length > 0 && (
        <div className="clear">
          <Button>
            <button onClick={handleClear}>Clear</button>
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
