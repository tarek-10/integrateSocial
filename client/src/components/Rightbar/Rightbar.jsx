import React, { useContext, useMemo } from "react";
import rightbarStyle from "./Rightbar.module.css";
import img1 from "../image/gift.png";
import img2 from "../image/iphone ad.jpg";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import img3 from "../image/p7.jpg";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log("user from right ===>", user);

  const { user: userToken } = useContext(AuthContext);

  const [friends, setFriends] = useState([]);
   
  const [followed , setFollowed] = useState(false);

   
    useEffect(()=>{
    
      setFollowed(userToken.following.includes(user?._id));

    },[followed , user._id])

  console.log("userToken", friends);

  useEffect(() => {
    const getFrineds = async () => {
      const api = `http://localhost:5000/friends/${userToken._id}`;
      try {
        const friendsLists = await axios.get(api, {
          headers: { Authorization: `Bearer ${userToken.token}` },
        });
        setFriends(friendsLists.data.firndsList);
        console.log("from rightbar =>", friendsLists.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFrineds();
  }, [userToken._id]);

  const HomeRightBarPage = () => {
    return (
      <>
        <div className={rightbarStyle.birthdayContainer}>
          <img className={rightbarStyle.birthdayImg} src={img1} alt="" />
          <span className={rightbarStyle.birthdayText}>
            <b>hanem mohamed</b> <b>and 3 other friends</b> have a birthday
            today
          </span>
        </div>
        <img className={rightbarStyle.rightbarAd} src={img2} alt="" />
        <h4 className={rightbarStyle.rightbarTitle}> Online Friends</h4>
        <ul className={rightbarStyle.rightbarFriendList}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBarPage = () => {
    return (
      <>
        {user.username !== userToken.username && (
          <button className={rightbarStyle.rightbarFollowBtn}>
           {followed ? "unfollow" : "follow"}
           {followed ? <Remove/> : <Add/>}
          </button>
        )}
        <h4 className={rightbarStyle.rightbarTitle}>User Information Title</h4>
        <div className={rightbarStyle.rightbarInfo}>
          <div className={rightbarStyle.rightbarInfoItem}>
            <span className={rightbarStyle.rightbarInfoKey}>City:</span>
            <span className={rightbarStyle.rightbarValue}>{user.city}</span>
          </div>
          <div className={rightbarStyle.rightbarInfoItem}>
            <span className={rightbarStyle.rightbarInfoKey}>From:</span>
            <span className={rightbarStyle.rightbarValue}>{user.from}</span>
          </div>
          <div className={rightbarStyle.rightbarInfoItem}>
            <span className={rightbarStyle.rightbarInfoKey}>Relationship:</span>
            <span className={rightbarStyle.rightbarValue}>
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "It's Complicated"}
            </span>
          </div>
        </div>
        <h4 className={rightbarStyle.rightbarTitle}>User Friends</h4>
        <div className={rightbarStyle.rightbarFollowings}>
          {friends.map((friend) => (
            <Link
              key={friend._id}
              to={`/profile/${friend.username}`}
              style={{ textDecoration: "none" }}
            >
              <div key={friend._id} className={rightbarStyle.rightbarFollowing}>
                <img
                  src={friend.profilePicture}
                  alt=""
                  className={rightbarStyle.rightbarFollowingImg}
                />
                <span className={rightbarStyle.rightbarFollowingName}>
                  {friend.username}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className={rightbarStyle.rightbar}>
      <div className={rightbarStyle.rightbarWrapper}>
        {/* {profile ? <ProfileRightBarPage /> : <HomeRightBarPage />} */}
        {user ? <ProfileRightBarPage /> : <HomeRightBarPage />}
      </div>
    </div>
  );
};

export default Rightbar;
