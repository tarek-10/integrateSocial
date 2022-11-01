import React, { useContext, useEffect, useRef, useState } from "react";
import shareStyle from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import { AuthContext } from "../../ContextApi/AuthContext";
import img1 from "../image/p3.jpg";
import axios from "axios";
const Share = () => {
  const [userPic, setUserPic] = useState("");
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState("");
  console.log(file);
  const submitHandler = async (e) => {
    e.preventDefault();
    
    const postData = {
      userId: user._id,
      desc: desc.current.value,
    };
    const formData = new FormData();
    const token = user.token;
    const api = "http://localhost:5000/post/create";

    if (file) {
      // const filename = Date.now() + '-' + Math.round(Math.random() * 1E9)+"_"+file.name;
        
      for (let i = 0; i < file.length; i++) {
        formData.append("postImage",file[i]);
        
      }
   
      formData.append("userId", user._id);
      formData.append("desc", !desc.current.value?" ":desc.current.value);

      try {
        const res = await axios.post(api, formData, {
          headers: { Authorization: `Bearer ${token}` },"content-type":'multipart/form-data'
        });
        console.log("from share post files", res.data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.post(api, postData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.reload();
      console.log("from share post", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("from share ==>", user._id);
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `http://localhost:5000/user/${user._id}`
      );
      console.log(res.data);
      setUserPic(res.data.profilePicture[0]);
    };

    getUser();
  }, []);
  return (
    <div className={shareStyle.share}>
      <div className={shareStyle.shareWrapper}>
        <div className={shareStyle.shareTop}>
          <img className={shareStyle.shareProfileImg} src={userPic} alt="" />
          <input
            placeholder="what's in your mind tarek"
            className={shareStyle.shareInput}
            ref={desc}
          />
        </div>
        <hr className={shareStyle.shareHr} />
        <form className={shareStyle.shareBottom} onSubmit={submitHandler}>
          <div className={shareStyle.shareOptions}>
            <label htmlFor="file" className={shareStyle.shareOption}>
              <PermMediaIcon
                htmlColor="tomato"
                className={shareStyle.shareIcon}
              />
              <span className={shareStyle.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                accept=".png,.jpeg,.jpg"
                id="file"
                name="postImage"
                multiple
                onChange={(e)=>setFile(e.target.files)}
              />
            </label>
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
          <button className={shareStyle.shareButton} type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};
export default Share;
