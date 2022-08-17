import React, { useContext, useState } from "react";
import AlertContext from "../context/alertContext/AlertContext";
import GithubContext from "../context/githubContext/GithubContext";

import Button from "../shared/Button";

import { FaChild } from "react-icons/fa";


function UserSearch() {
  const { users, searchUser, clearUser } = useContext(GithubContext);
  const { alertUser, alertMsg } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertUser("Please type a Github username", "error");
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
      {alertMsg.type === "error" && (
        <div className="error-msg">
            <p>{alertMsg.msg}</p> <i><FaChild/></i>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search For Github ..."
            onChange={handleChange}
            value={text}
          />
          <Button absolute="absolute" type="submit">
            <button onClick={handleSubmit}>Search</button>
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
