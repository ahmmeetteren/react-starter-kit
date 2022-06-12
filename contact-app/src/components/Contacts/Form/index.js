import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phonenumber: "" };

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phonenumber === "") {
      return false;
    } else {
      setContacts([...contacts, form]);
    }
  };
  return (
    <form className="w-100">
      <div>
        <input
          name="fullname"
          value={form.fullname}
          placeholder="Full Name"
          onChange={onChangeInput}
          className="form-control mb-2"
        ></input>
      </div>
      <div>
        <input
          name="phonenumber"
          value={form.phonenumber}
          placeholder="Phone Number"
          onChange={onChangeInput}
          className="form-control mb-2"
        ></input>
      </div>
      <button onClick={onSubmit} className="float-end btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default Form;
