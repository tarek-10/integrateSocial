import React from "react";
import sidebarStyle from "./Sidebar.module.css";
import ChatIcon from "@mui/icons-material/Chat";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../dummyData";
import CloseFriends from "../CloseFriends/CloseFriends";
const Sidebar = () => {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.sidebarWrapper}>
        <ul className={sidebarStyle.sidebarList}>
          <li className={sidebarStyle.sidebarListItem}>
            <RssFeedIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Feed</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <ChatIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Chat</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <PlayCircleOutlineIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Videos</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <GroupIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Group</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <BookmarkIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>BookMarks</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <HelpOutlineIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Questions</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <WorkOutlineIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Jobs</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <EventIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Events</span>
          </li>
          <li className={sidebarStyle.sidebarListItem}>
            <SchoolIcon className={sidebarStyle.sidebarIcon} />
            <span className={sidebarStyle.sidebarListText}>Courses</span>
          </li>
        </ul>
        <button className={sidebarStyle.sidebarButton}>Show More</button>
        <hr className={sidebarStyle.sidebarHr} />
        <ul className={sidebarStyle.sidebarFiendList}>
          {Users.map((u) => (
            <CloseFriends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
