import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ahmet Eren Yılmaz",
      phonenumber: "1245",
    },
    {
      fullname: "Arda Batur Yılmaz",
      phonenumber: "3456",
    },
    {
      fullname: "Baki Yılmaz",
      phonenumber: "789",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="w-25 h-50 d-flex flex-column align-items-center justify-content-center">
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
