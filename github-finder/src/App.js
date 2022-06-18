import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Users from "./components/Users";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [showClearButton, setshowClearButton] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUser = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => setUser(res.data.items))
      .then(setisLoading(false))
      .then(setshowClearButton(true));
  };

  const clearResults = () => {
    setUser([]);
    setshowClearButton(false);
  };

  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type });
  };
  return (
    <>
      <Navbar title="Github Finder" icon="fa-brands fa-github" />
      <Alert alert={alert} />
      <Search
        searchUser={searchUser}
        clearResults={clearResults}
        showClearButton={showClearButton}
        setAlertMsg={setAlertMsg}
      />
      <Users users={user} loading={isLoading} />
    </>
  );
}

export default App;
