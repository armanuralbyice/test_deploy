import React, { useState } from "react";
import axios from "axios";

const Registation = () => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
  });

  const handelnput = (e) => {
    const { name, value } = e.target;
    SetUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://test-deploy-navy-ten.vercel.app/api/user/register", user)
      .then((res) => {
        console.log("Success data:", res.data);
        window.alert("Data added successfully");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  console.log("user state", user);
  return (
    <div className="container">
      <div className="title">
        <h3>Registation Form</h3>
      </div>
      <form onSubmit={handelSubmit}>
        <div className="input-fields">
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handelnput}
          />
        </div>
        <div className="input-fields">
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handelnput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registation;
