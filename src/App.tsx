import React from "react";
import axios, { AxiosResponse } from "axios";

import logo from "./logo.svg";
import "./App.css";

interface IUser {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[] | undefined>();
  React.useEffect(() => {
    axios
      .get("/api/customers/all")
      .then((users: AxiosResponse<IUser[]>) => {
        setUsers(users.data);
      })
      .catch(console.error);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Array.isArray(users) ? (
            <>
              {users.map(u => (
                <div>
                  {u.name}: <code>{u.email}</code>
                </div>
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
        </p>
        <button
          onClick={() => {
            axios.post("/api/customers/");
          }}
        >
          Add User
        </button>
      </header>
    </div>
  );
};

export default App;
