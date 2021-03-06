import React from "react";
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div className="col-md-4 col-sm-6 col-xl-3">
      <div className="card mt-2">
        <img src={user.avatar_url} alt="" className="img-fluid" />
        <div className="card-body">
          <p className="card-text text-center">{user.login}</p>
          <Link
            to={`/user/${user.login}`}
            className="btn btn-dark btn-sm w-100"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
