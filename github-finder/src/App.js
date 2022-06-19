import axios from "axios";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Alert from "./components/Alert";
import Users from "./components/Users";
import About from "./components/About";
import UserDetails from "./components/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [showClearButton, setshowClearButton] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUser = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => setUsers(res.data.items))
      .then(setisLoading(false))
      .then(setshowClearButton(true));
  };

  const getUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => setUser(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getUserRepos = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => setRepos(res.data))
      .catch((error) => {
        console.log(error.response);
      });
  };

  const clearResults = () => {
    setUsers([]);
    setshowClearButton(false);
  };

  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type });
  };
  return (
    <BrowserRouter>
      <Navbar title="Github Finder" icon="fa-brands fa-github" />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                searchUser={searchUser}
                clearResults={clearResults}
                showClearButton={showClearButton}
                setAlertMsg={setAlertMsg}
              />
              <Users users={users} loading={isLoading} />
            </>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user">
          <Route
            path=":login"
            element={
              <UserDetails
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
