import React, { useState } from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {

    let error = {};

    if (firstName.trim() === "") {
      error.firstName = "First Name is required";
    }

    if (lastName.trim() === "") {
      error.lastName = "Last Name is required";
    }

    if (email.trim() === "") {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Enter a valid Email";
    }

    setErrors(error);

    if (Object.keys(error).length === 0) {
      setSuccess("Registration Successful!");
    } else {
      setSuccess("");
    }
  };

  return (

    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "2px solid black",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
      }}
    >

      <h2 align="center">Registration Form</h2>

      <label>First Name</label>

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ width: "100%", padding: "2px", }}
      />

      <p style={{ color: "red" }}>
        {errors.firstName}
      </p>

      <label>Last Name</label>

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ width: "100%", padding: "2px" }}
      />

      <p style={{ color: "red" }}>
        {errors.lastName}
      </p>

      <label>Email</label>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "2px" }}
      />

      <p style={{ color: "red" }}>
        {errors.email}
      </p>

      <button
        onClick={validate}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Register
      </button>

      <h3
        style={{
          color: "green",
          textAlign: "center"
        }}
      >
        {success}
      </h3>

    </div>

  );
}

export default App;
