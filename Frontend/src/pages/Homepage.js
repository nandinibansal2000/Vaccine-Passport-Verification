import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="page">
        <div className="left">
          <img
            srcset={process.env.PUBLIC_URL + "/collage.png 1200w"}
            alt="virus"
            sizes="(max-width: 640px) 0px,(max-width: 780px) 160px,(max-width: 1240px) 250px,360px"
          ></img>
        </div>
        <div className="linecontainer">
          <div className="line"></div>
        </div>
        <div className="right">
          <Login />
        </div>
      </div>
    </>
  );
}
