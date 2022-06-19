import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Repos from "./Repos";

function UserDetails({ getUser, user, getUserRepos, repos }) {
  const { login } = useParams();
  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, []);
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={user.avatar_url}
              alt="User Card"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="card-text">
                <i className="fa-solid fa-location-dot"></i>
                <span className="ms-2 text-capitalize">{user.location}</span>
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href={user.html_url}
                className="btn btn-primary w-100"
              >
                Github Profile
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              {user.bio && (
                <>
                  <h3>About</h3>
                  <p>{user.bio}</p>
                </>
              )}
              {user.bio && (
                <>
                  <h3>Blog</h3>
                  <p>{user.blog}</p>
                </>
              )}
              <div>
                <span className="badge bg-primary">
                  Followers: {user.followers}
                </span>
                <span className="badge bg-danger ms-1">
                  Following: {user.following}
                </span>
                <span className="badge bg-success ms-1">
                  Repos: {user.public_repos}
                </span>
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush mt-4">
            <Repos repos={repos} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
