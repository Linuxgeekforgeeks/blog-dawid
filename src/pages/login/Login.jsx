import { useContext, useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
function Login() {
  const {setUserInfo}=useContext(UserContext)
  const [LoginInput, setLoginInput] = useState({
    username: "",
    password: "",
  });

  const [redirect, setredirect] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login",LoginInput);
      console.log(response.data)
      if (response.status===200&&response.data.message!=='Login Failed.!') {
        setUserInfo(response.data)
        localStorage.setItem("user",JSON.stringify(response.data))
          setredirect(true);
      }else{
        alert("Wrong password ")
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleFormInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <div className="login">
        <form>
          <h1>Login</h1>
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

          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an Account?<a href="/register">Register</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
