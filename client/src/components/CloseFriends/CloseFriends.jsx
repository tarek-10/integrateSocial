import React from "react";
import closeFriendsStyle from "./CloseFriends.module.css";
const CloseFriends = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className={closeFriendsStyle.sidebarFriend}>
        <img
          className={closeFriendsStyle.sidebarFirendImg}
          src={PF + user.profilePicture}
          alt=""
        />
        <span className={closeFriendsStyle.sidebarFriendName}>
          {user.username}
        </span>
      </li>
    </>
  );
};

export default CloseFriends;
