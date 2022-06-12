import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div className="w-100">
      <input
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="form-control mb-2"
      ></input>
      <ul class="list-group mb-3 mt-3">
        {filtered.map((contact, i) => (
          <li key={i} class="list-group-item">
            <div className="d-inline-block">{contact.fullname}</div>
            <div className="d-inline-block float-end">
              {contact.phonenumber}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
