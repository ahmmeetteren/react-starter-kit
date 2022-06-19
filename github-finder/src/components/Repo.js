import React from "react";
import "../App.css";

function Repo({ repo }) {
  return (
    <div>
      <li className="list-group-item repoBorder">
        <a className="text-decoration-none" href={repo.html_url}>
          - {repo.name}
        </a>
      </li>
    </div>
  );
}

export default Repo;
