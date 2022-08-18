import React from "react";

import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import Icon from "../shared/Icon";

function RepoItem({ repo }) {
  const {
    name,
    description,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
    html_url,
  } = repo;

  return (
    <div className="repo flex">
      <div className="name flex">
        <FaLink />
        <a href={html_url}>
          <h3>{name}</h3>
        </a>
      </div>
      <div className="repo-stat">
        <p>{description}</p>
        <div>
          <p>
            <Icon color="red">
              <FaEye />{watchers_count}
            </Icon>
          </p>
          <p>
            <Icon color="blue">
              <FaInfo />
            {open_issues}

            </Icon>
          </p>
          <p>
            <Icon color="green">
              <FaStar />
            {stargazers_count}

            </Icon>

          </p>

          <p>
            <Icon color="yellow">
              <FaUtensils />
              {forks}
            </Icon>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
