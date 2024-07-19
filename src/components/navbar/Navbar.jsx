import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { UserContext } from "../../context/UserContext";
function Navbar() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [searchItem,setSearchItem]=useState("")

  // const getProfile=async() => {
  //   try {
  //     const res= await fetch("http://localhost:4000/profile",{credentials:"include"}).then(res => res.json())
  //     setUserInfo(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(()=>{
  //   getProfile()
  // },[])

  const Logout = async () => {
    try {
      await fetch("http://localhost:4000/logout", {
        credentials: "include",
        method: "POST",
      });
      setUserInfo(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <nav>
      <div className="navbar__left">
      <h1>
        <a href="/">CodeWithMudi</a>
      </h1>
      <div className="searchbar">
        <input type="text" placeholder="Enter your Seach ...." />
      </div>

      </div>
      <ul className="navbar__right">
        {userInfo && (
          <>
            <a href="/createpost">Create A Post</a>
            <div>({userInfo?.username})</div>
            <button className="logout-btn" onClick={Logout}>
              LogOut
            </button>
          </>
        )}
        {!userInfo && (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
