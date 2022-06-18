import React from "react";

function User({ user }) {
  return (
    <div className="col-md-4 col-sm-6 col-xl-3">
      <div className="card mt-2">
        <img src={user.avatar_url} alt="" className="img-fluid" />
        <div className="card-body">
          <p className="card-text">{user.login}</p>
          <a
            href={user.html_url}
            target="_blank"
            className="btn btn-primary btn-sm"
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default User;
