import { useState } from "react";
import Table from "./components/Table";
import useUsers from "./components/users";

function App() {
  const [user, setUser] = useState("");
  const [users, status] = useUsers(user);

  const handleUsers = () => {
    setUser("i want users");
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "20px",
      }}
    >
      <button
        onClick={handleUsers}
        style={{
          background: "orange",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Fetch Users
      </button>
      <h2>Users List</h2>
      <Table users={users} status={status} />
    </div>
  );
}

export default App;
