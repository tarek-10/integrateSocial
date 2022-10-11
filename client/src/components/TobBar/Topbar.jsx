import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import img1 from "../../image/profile1.jpg";
import topbarStyle from "./Topbar.module.css";
import { AuthContext } from "../../ContextApi/AuthContext";
import {Link} from "react-router-dom";
const Topbar = () => {
 
  return (
    <div className={topbarStyle.topbarContainer}>
      <div className={topbarStyle.topbarLeft}>
        <span className={topbarStyle.logo}>tarek social</span>
      </div>
      <div className={topbarStyle.topbarCenter}>
        <div className={topbarStyle.searchbar}>
          <SearchIcon className={topbarStyle.serachIcon} />
          <input
            placeholder="Search For Firends Posts Or videos"
            className={topbarStyle.searchInput}
          />
        </div>
      </div>
      <div className={topbarStyle.topbarRight}>
        <div className={topbarStyle.topbarLinks}>
          <span className={topbarStyle.topbarLink}>HomePage</span>
          <span className={topbarStyle.topbarLink}>TimeLine</span>
        </div>
        <div className={topbarStyle.topbarIcons}>
          <div className={topbarStyle.topbarIconItems}>
            <PersonIcon />
            <span className={topbarStyle.topbarIconBadge}>1</span>
          </div>
        </div>
        <div className={topbarStyle.topbarIcons}>
          <div className={topbarStyle.topbarIconItems}>
            <ChatIcon />
            <span className={topbarStyle.topbarIconBadge}>2</span>
          </div>
        </div>
        <div className={topbarStyle.topbarIcons}>
          <div className={topbarStyle.topbarIconItems}>
            <NotificationsIcon />
            <span className={topbarStyle.topbarIconBadge}>1</span>
          </div>
        </div>
        <Link to={`/profile/${userData.username}`}>
        <img src={userPic} className={topbarStyle.topbarImg} alt="profileImage" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
