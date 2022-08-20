import React, { useContext, useState } from "react";
import { FaChild } from "react-icons/fa";

import Button from "../shared/Button";
import AlertContext from "../context/alertContext/AlertContext";
import GithubContext from "../context/githubContext/GithubContext";
import { searchUser } from "../context/githubContext/GithubActions";

function UserSearch() {
  const { users, dispatch } = useContext(GithubContext);
  const { alertUser, alertMsg } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      alertUser("Please type a Github username", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUser(text);
      dispatch({ type: "FETCH_USER", payload: users });
      setText("");
    }
  };

  return (
    <div className="search">
      
      {alertMsg.type === "error" && (
        <div className="error-msg">
          <p>{alertMsg.msg}</p>{" "}
          <i>
            <FaChild />
          </i>
        </div>
      )}

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="search for your github profile ..."
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
              <button onClick={() => dispatch({ type: "CLEAR_USER" })}>
                Clear
              </button>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
