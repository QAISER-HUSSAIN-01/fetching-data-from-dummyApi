import { useState, useEffect } from "react";

export default function useUsers(user) {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!user) {
      setUsers([]);
    } else {
      requestUsers();
    }

    async function requestUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      console.log(json);
      setUsers(json);
      setStatus(true);
    }
  }, [user]);

  return [users, status];
}
