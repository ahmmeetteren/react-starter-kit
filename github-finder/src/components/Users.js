import React from "react";
import Loading from "./Loading";
import User from "./User";

function Users({ users, loading }) {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="container mt-3">
        <div className="row">
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
