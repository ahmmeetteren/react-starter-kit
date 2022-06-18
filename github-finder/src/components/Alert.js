function Alert({ alert }) {
  return (
    alert !== null && (
      <div className="container my-2">
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Alert;
