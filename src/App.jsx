import { useState } from "react";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css"
import CreatePost from "./pages/createPost/CreatePost";

function App() {
   const [userData,setUserData]=useState("")
 
  return (
    <div className="app">
     <Routes>
      <Route path="/" index element={<HomePage userData={userData} setUserData={setUserData} />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/createpost" element={<CreatePost/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
