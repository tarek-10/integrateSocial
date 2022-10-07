import React from "react";
import onlineStyle from "./Online.module.css";
const Online = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className={onlineStyle.rightBarFirend}>
        <div className={onlineStyle.rightbarProfileImgContainer}>
          <img
            className={onlineStyle.rightbarProfileImg}
            src={PF + user.profilePicture}
            alt=""
          />
          <span className={onlineStyle.rightbarOnline}></span>
        </div>
        <span className={onlineStyle.rightbarUsername}>{user.username}</span>
      </li>
    </>
  );
};

export default Online;
