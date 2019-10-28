import React from "react";
import axios, { AxiosResponse } from "axios";

import logo from "./logo.svg";
import "./App.css";

interface IUser {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [user, setUser] = React.useState<IUser | undefined>();
  React.useEffect(() => {
    axios
      .get("/api/user")
      .then((user: AxiosResponse<IUser>) => {
        setUser(user.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {user ? (
            <>
              {user.name}: <code>{user.email}</code>
            </>
          ) : (
            <>Loading...</>
          )}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
