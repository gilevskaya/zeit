import React from "react";
import axios, { AxiosResponse } from "axios";
import Chance from "chance";

import "./App.css";

var chance = new Chance();

interface IUser {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[] | undefined>();
  React.useEffect(() => {
    fetchUsers();
  }, []);

  function fetchUsers() {
    axios
      .get("/api/customers/all")
      .then(({ data }: AxiosResponse<IUser[]>) => {
        setUsers(data);
      })
      .catch(console.error);
  }
  function addUser() {
    const name = chance.name({ nationality: "en" });
    axios
      .post("/api/customers/", {
        name,
        email: `${name
          .toLowerCase()
          .split(" ")
          .join("-")}@${chance.domain()}`
      })
      .then(fetchUsers);
  }
  function deleteUser(id: number) {
    axios.post("/api/customers/delete", { id }).then(() => {
      fetchUsers();
    });
  }

  return (
    <div className="App">
      <header>
        {Array.isArray(users) ? (
          users.map(u => (
            <div style={{ display: "flex" }}>
              <button
                style={{ marginRight: "10px" }}
                onClick={() => deleteUser(u.id)}
              >
                x
              </button>
              <div>
                {u.name}: {u.email}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={addUser} style={{ marginTop: "20px" }}>
          Add User
        </button>
      </header>
    </div>
  );
};

export default App;
