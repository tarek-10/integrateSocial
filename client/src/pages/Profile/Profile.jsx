import React from "react";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Test from "../../components/Test/Test";
import profileStyle from "./Profile.module.css";
import img1 from "../../components/image/post3.jpg";
import img2 from "../../components/image/p10.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const [userCoverPic, setUserCoverPic] = useState([]);
  const params = useParams();
  console.log(params.username);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/user?username=${params.username}`);
      console.log("====> from profile", res.data);
      setUser(res.data);
      setUserCoverPic(res.data.coverPicture);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Test />
      <div className={profileStyle.profile}>
        <Sidebar />
        <div className={profileStyle.profileRight}>
          <div className={profileStyle.profileRightTop}>
            <div className={profileStyle.profileCover}>
              <img
                className={profileStyle.profileCoverImg}
                src={userCoverPic[0] || img1}
                alt=""
              />
              <img
                className={profileStyle.profileUserImg}
                src={user.profilePicture || img2}
                alt=""
              />
            </div>
            <div className={profileStyle.profileInfo}>
              <h4 className={profileStyle.profileInfoName}>{user.username}</h4>
              <span className={profileStyle.profileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div className={profileStyle.profileRightBottom}>
            <Feed username={params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
