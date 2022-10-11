import React, { useContext, useEffect, useState } from "react";
import postStyle from "./Posts.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import img3 from "../image/like2.png";
import img4 from "../image/heart2.jpg";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router-dom";
const Posts = ({ post }) => {
  console.log("-----", post);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
useEffect(()=>{

  setIsLiked(post.likes.includes(user.data._id))
},[user.data._id,post.likes])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:5000/user?userId=${post.userId}`
      );
      console.log("====> post user", res.data);
      setUsers(res.data);
    };
    fetchUser();
  }, [post.userId]);
    
  let api = ` http://localhost:5000/`;
  const AuthAxios = axios.create({
    baseURL:api,
    headers:{
      Authorization: `Bearer ${user.token}`
    }
  })

  const likeHandler = async () => {
       
   
    try {
 
    const res = await AuthAxios.put(`http://localhost:5000/like/${post._id}`);
      console.log(res.data);
    } catch (error) {
      console.log("error");
    }

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
                src={users.profilePicture || `${PF}image/10.JPG`}
                alt=""
              />
            </Link>
            <span className={postStyle.postUsername}>{users.username}</span>
            <span className={postStyle.postDate}>{format(post.createdAt)}</span>
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
