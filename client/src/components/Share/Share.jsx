import React, { useContext , useEffect, useState} from "react";
import shareStyle from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import { AuthContext } from "../../ContextApi/AuthContext";
import img1 from "../image/p3.jpg";
import axios from "axios";
const Share = () => {

  const [userPic,setUserPic] = useState("");
  const { user } = useContext(AuthContext);
  console.log("from share ==>",user.data._id);
  useEffect(()=>{
      const getUser = async()=>{
        const res = await axios.get(`http://localhost:5000/user/${user.data._id}`);
        console.log(res.data);
        setUserPic(res.data.profilePicture[0]);
      }

      getUser();
  },[])
  return (
    <div className={shareStyle.share}>
      <div className={shareStyle.shareWrapper}>
        <div className={shareStyle.shareTop}>
          <img className={shareStyle.shareProfileImg} src={userPic} alt="" />
          <input
            placeholder="what's in your mind tarek"
            className={shareStyle.shareInput}
          />
        </div>
        <hr className={shareStyle.shareHr} />
        <div className={shareStyle.shareBottom}>
          <div className={shareStyle.shareOptions}>
            <div className={shareStyle.shareOption}>
              <PermMediaIcon
                htmlColor="tomato"
                className={shareStyle.shareIcon}
              />
              <span className={shareStyle.shareOptionText}>Photo or Video</span>
            </div>
            <div className={shareStyle.shareOption}>
              <LabelIcon htmlColor="blue" className={shareStyle.shareIcon} />
              <span className={shareStyle.shareOptionText}>Tag</span>
            </div>
            <div className={shareStyle.shareOption}>
              <RoomIcon htmlColor="green" className={shareStyle.shareIcon} />
              <span className={shareStyle.shareOptionText}>Location</span>
            </div>
            <div className={shareStyle.shareOption}>
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className={shareStyle.shareIcon}
              />
              <span className={shareStyle.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={shareStyle.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
