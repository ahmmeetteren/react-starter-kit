import React from "react";

function Repo({ repo }) {
  return (
    <div>
      <li className="list-group-item">
        <a className="text-decoration-none" href={repo.html_url}>
          - {repo.name}
        </a>
      </li>
    </div>
  );
}

export default Repo;
