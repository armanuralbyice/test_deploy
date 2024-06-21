import axios from "axios";
import React, { useState, useEffect } from "react";

const Fetchdata = () => {
  const [users, setUsers] = useState([]);

  const IntialData = async () => {
    try {
      const response = await axios.get(
        "https://test-deploy-api-gamma.vercel.app/api/user/all"
      );
      console.log(response.data);
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    IntialData();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))
      ) : (
        <>
          <td>No users found</td>
        </>
      )}
    </div>
  );
};

export default Fetchdata;
