import React from "react";
import "./HomePage.css";
import SinglePost from "../../components/singlePost/SinglePost";
import Navbar from "../../components/navbar/Navbar";
function HomePage({userData,setUserData}) {
  return (
    <div className="homepage">
     <Navbar userData={userData} setUserData={setUserData} />
      <section>
        <SinglePost userData={userData}/>
        <SinglePost/>
        <SinglePost/>
        <SinglePost/>
      </section>
    </div>
  );
}

export default HomePage;
