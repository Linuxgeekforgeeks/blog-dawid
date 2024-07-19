import React from "react";
import "./SinglePost.css";

function SinglePost({ userData }) {
  return (
    <div className="singlePost">
      <div className="singlePost__left">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_640.jpg"
          alt=""
        />
      </div>
      <div className="singlePost__right">
        <h1>
        Here Are The Coolest New Cars For 2020
        </h1>
        <div className="right__timestamp">
          {userData ? <p>{userData.username}</p> : "user1"}
          <p>{new Date().toLocaleString()}</p>
        </div>
        <p>
          Though there is an assortment of brand-new and fully redesigned
          passenger cars hitting the road for 2020 model year, their numbers are
          dwindling as buyers are instead choosing sport-utility vehicles as
          their rides of choice. Stalwart sedans like the Chevrolet Impala and
          Ford Taurus are being discontinued, with the number of small cars in
          particular thinning rapidly. While there were 26 subcompact models on
          the market as recently as 2016, they’re down to just 17 for 2019, with
          the Ford Fiesta and Chevrolet Sonic reportedly bowing out at the end
          of the current model year.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
