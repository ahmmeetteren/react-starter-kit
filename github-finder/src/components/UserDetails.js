import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Repos from "./Repos";
import "../App.css";

function UserDetails({ getUser, user, getUserRepos, repos }) {
  const { login } = useParams();
  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img
              src={user.avatar_url}
              alt="User Card"
              className="card-img-top detailImg"
            />
            <div className="card-body">
              <p className="card-text text-center">{user.name}</p>
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
              {user.login && (
                <>
                  <p>
                    <strong>Username: </strong>
                    {user.login}
                  </p>
                </>
              )}
              {user.company && (
                <>
                  <p>
                    <strong>Company: </strong>
                    {user.company}
                  </p>
                </>
              )}
              {user.bio && (
                <>
                  <p>
                    <strong>Bio:</strong> {user.bio}
                  </p>
                </>
              )}
              {user.bio && (
                <>
                  <p>
                    <strong>Website: </strong>
                    <a className="text-decoration-none" href={user.blog}>
                      {user.blog}
                    </a>
                  </p>
                </>
              )}

              <div className="text-center">
                <span className="badge bg-primary mx-1 p-2">
                  Followers: {user.followers}
                </span>
                <span className="badge bg-danger mx-1 p-2">
                  Following: {user.following}
                </span>
                <span className="badge bg-success mx-1 p-2">
                  Public Repos: {user.public_repos}
                </span>
                <span className="badge bg-dark mx-1 p-2">
                  Public Gists: {user.public_gists}
                </span>
              </div>
            </div>
          </div>
          <p className="text-center mt-4 fw-bold">Repositories</p>
          <ul className="list-group mt-4">
            <Repos repos={repos} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
