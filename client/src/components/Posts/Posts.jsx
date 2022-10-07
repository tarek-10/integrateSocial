import React, { useEffect, useState } from "react";
import postStyle from "./Posts.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img3 from "../image/like2.png";
import img4 from "../image/heart2.jpg";
import axios from "axios";
import { format } from "timeago.js";
import {Link} from "react-router-dom";
const Posts = ({ post }) => {
  console.log("-----",post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:5000/user?userId=${post.userId}`);
      console.log("====> post user",res.data);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };


  return (
    <div className={postStyle.post}>
      <div className={postStyle.postWrapper}>
        <div className={postStyle.postTop}>
          <div className={postStyle.postTopLeft}>
            <Link to={`/profile/${user.username}`}>
            <img
              className={postStyle.postProfileImg}
               src={user.profilePicture || `${PF}image/10.JPG`}
              alt=""
            />
            </Link>
            <span className={postStyle.postUsername}>{user.username}</span>
            <span className={postStyle.postDate}>
            
              {format(post.createdAt)}
            </span>
          </div>
          <div className={postStyle.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={postStyle.postCenter}>
          <span className={postStyle.postText}> {post?.desc}</span>
          <img className={postStyle.postImg} src={post.postImage} alt="" />
        </div>
        <div className={postStyle.postBottom}>
          <div className={postStyle.postBottomLeft}>
            <img
              className={postStyle.likeIcon}
              onClick={likeHandler}
              src={img3}
              alt=""
            />
            <img
              className={postStyle.likeIcon}
              onClick={likeHandler}
              src={img4}
              alt=""
            />
            <span className={postStyle.postLikeCounter}>
              {like} people liked it
            </span>
          </div>
          <div className={postStyle.postBottomRight}>
            <span className={postStyle.postCommentText}>
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
