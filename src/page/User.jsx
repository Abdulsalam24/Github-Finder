import React, { useEffect } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import GihubContext from "../context/githubContext/GithubContext";
import RepoItem from "../components/RepoItem";

import { FaUsers, FaUser } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";
import { BsFillFileCodeFill } from "react-icons/bs";
import { getUserAndRepos } from "../context/githubContext/GithubActions";
import Spinner from "../components/Spinner";

function User() {
  const { user, repos,loading, dispatch } = useContext(GihubContext);
  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const userDataAndRepo = async () => {
      const userData = await getUserAndRepos(params.login);

      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    userDataAndRepo();
  }, [dispatch, params.login]);

  const {
    login,
    avatar_url,
    name,
    type,
    hireable,
    twitter_username,
    created_at,
    public_repos,
    public_gists,
    html_url,
    followers,
    following,
    blog,
    location,
    bio,
  } = user;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container user">
          <div className="back">
            <Link to="/">
              <button>Back to Search</button>
            </Link>
          </div>
          <div className="user-info flex">
            <div className="img-div">
              <img src={avatar_url} alt={login} />
              <div className="name">
                <h3>{login}</h3>
                <h4>{name}</h4>
              </div>
              <div className="thumbnail"></div>
            </div>
            <div className="text-div flex">
              <div className="name flex">
                <h1>{name}</h1>
                <h4>{type}</h4>
                <h4>{hireable && "hireable"}</h4>
              </div>
              <div className="bio">
                <p>{bio}</p>
              </div>
              <div className="profile">
                <button>
                  <a href={html_url} target="_blank" rel="noreferrer">
                    View Github Profile
                  </a>
                </button>
              </div>
              <div className="info flex">
                {location && (
                  <div className="location">
                    <p>
                      <i>Location</i> <br /> {location}
                    </p>
                  </div>
                )}

                {blog && (
                  <div className="website">
                    <p>
                      <i>Website</i> <br />
                      <a
                        href={`https://${blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {blog}
                      </a>
                    </p>
                  </div>
                )}

                {twitter_username && (
                  <div className="Twitter">
                    <p>
                      <i>Twitter</i> <br /> {twitter_username}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="stat flex">
            <div className="flex">
              <FaUsers />
              <div className="item">
                <p>Followers</p>
                <h3>{followers}</h3>
              </div>
            </div>
            <div className="flex">
              <FaUser />
              <div className="item">
                <p>Following</p>
                <h3>{following}</h3>
              </div>
            </div>
            <div className="flex">
              <RiGitRepositoryFill />
              <div className="item">
                <p>Public Repo</p>
                <h3>{public_repos}</h3>
              </div>
            </div>
            <div className="flex">
              <BsFillFileCodeFill />
              <div className="item">
                <p>Public Gists</p>
                <h3>{public_gists}</h3>
              </div>
            </div>
          </div>
          <div className="repository">
            <h2>Latest Repostory</h2>
            <div className="repos">
              {repos.map((repo) => (
                <RepoItem key={repo.id} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
