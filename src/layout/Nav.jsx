import { FaGithub } from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Nav({ title }) {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>{title}</h1> <FaGithub />
        </div>
        <div className="nav-list">
          <NavLink to={``}>Home</NavLink>
          <NavLink to={`/about`}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}

Nav.defaultProps = {
  title: "Github Finder",
};

export default Nav;
