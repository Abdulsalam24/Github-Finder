import React from "react";

import { FaLink } from "react-icons/fa";

function RepoItem({ repo }) {
  const { name, description, size, html_url } = repo;
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
        <div className="flex">
          <p>{size}</p>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
