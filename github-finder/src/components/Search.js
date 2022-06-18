import { useState } from "react";

function Search({ searchUser, clearResults, showClearButton }) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser(keyword);
    setKeyword("");
  };
  console.log(showClearButton);
  return (
    <div className="container my-2">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            value={keyword}
            onChange={handleChange}
            className="form-control"
          />
          <button className="btn btn-primary">Search</button>
        </div>
      </form>
      {showClearButton && (
        <button onClick={clearResults} className="btn btn-danger w-100 mt-2">
          Clear Results
        </button>
      )}
    </div>
  );
}

export default Search;
