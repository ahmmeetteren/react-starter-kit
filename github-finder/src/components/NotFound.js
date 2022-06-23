import React from "react";

function NotFound() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      id="notFoundContainer"
    >
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
        404
      </h1>
      <div className="inline-block align-middle ms-3">
        <h2 className="font-weight-normal lead">
          The page you requested was not found.
        </h2>
      </div>
    </div>
  );
}

export default NotFound;
