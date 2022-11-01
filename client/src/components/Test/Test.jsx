import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import testStyle from "./Test.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import img1 from "../image/profile1.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
const Test = () => {
  const {user} = useContext(AuthContext);
  const [userPic , setUserPic] = useState("");
  const [userData , setUseData] = useState({});
  useEffect(()=>{
    const getUser = async()=>{
      const res = await axios.get(`http://localhost:5000/user/${user._id}`);
      console.log(res.data);
      setUseData(res.data)
      setUserPic(res.data.profilePicture[0]);
    }

    getUser();
},[])
  return (
    <>
      <div className={`fluid-container ${testStyle.topbarContainer}`}>
        <div className={testStyle.row}>
          <div className="col-md-8">
            <div className={testStyle.items}>
              <div className="nav-items">
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <Link className="navbar-brand" to="/">
                    Tarek Social
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </nav>
              </div>

              <div className={testStyle.topbarCenter}>
                <nav className="navbar navbar-expand-lg navbar-dark">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <div className={testStyle.searchbar}>
                      <SearchIcon className={testStyle.serachIcon} />
                      <input
                        placeholder="Search For Firends Posts Or videos"
                        className={testStyle.searchInput}
                      />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={testStyle.topbarRight}>
              <div className={testStyle.topbarLinks}>
                <span className={testStyle.topbarLink}>HomePage</span>
                <span className={testStyle.topbarLink}>TimeLine</span>
              </div>
              <div className={testStyle.topbarIcons}>
                <div className={testStyle.topbarIconItems}>
                  <PersonIcon />
                  <span className={testStyle.topbarIconBadge}>1</span>
                </div>
              </div>
              <div className={testStyle.topbarIcons}>
                <div className={testStyle.topbarIconItems}>
                  <ChatIcon />
                  <span className={testStyle.topbarIconBadge}>2</span>
                </div>
              </div>
              <div className={testStyle.topbarIcons}>
                <div className={testStyle.topbarIconItems}>
                  <NotificationsIcon />
                  <span className={testStyle.topbarIconBadge}>1</span>
                </div>
              </div>
              <Link to={`/profile/${userData.username}`} className={testStyle.tobarImageLink}>
              <img
                src={userPic}
                className={testStyle.topbarImg}
                alt="profileImage"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
