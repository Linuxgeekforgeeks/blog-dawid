import { useState } from "react";
import "./Register.css";
import { Navigate } from "react-router-dom";
function Register() {
  const [registerInput, setRegisterInput] = useState({
    username: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log(registerInput)
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(registerInput),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setRedirect(true);
      }
    } catch (error) {
      alert("Registration Failed.Try Again Later.");
    }
  };
  const handleFormInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setRegisterInput((prev) => ({ ...prev, [name]: value }));
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  } else {
    return (
      <div className="login">
        <form>
          <h1>Register</h1>
          <div className="formInput">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={handleFormInput}
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              onChange={handleFormInput}
              type="text"
              id="password"
              placeholder="password"
            />
          </div>

          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
