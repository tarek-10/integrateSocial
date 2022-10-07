import React from "react";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Test from "../../components/Test/Test";
import homeStyle from "./Home.module.css";
const Home = () => {
  return (
    <>
      <Test />
      <div className={homeStyle.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
