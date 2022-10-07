import React from "react";
import rightbarStyle from "./Rightbar.module.css";
import img1 from "../image/gift.png";
import img2 from "../image/iphone ad.jpg";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import img3 from "../image/p7.jpg";
const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={img3}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={`${PF}image/p8.jpeg`}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={`${PF}image/p4.jpg`}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={`${PF}image/p3.jpg`}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={`${PF}image/p14.jpg`}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
          <div className={rightbarStyle.rightbarFollowing}>
            <img
              src={`${PF}image/p12.jpg`}
              alt=""
              className={rightbarStyle.rightbarFollowingImg}
            />
            <span className={rightbarStyle.rightbarFollowingName}>
              hanem mohamed
            </span>
          </div>
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
