import React, { useContext, useEffect, useState } from "react";
import Share from "../Share/Share";
import Posts from "../Posts/Posts";
import feedStyle from "./Feed.module.css";
import axios from "axios";
import { AuthContext } from "../../ContextApi/AuthContext";
const Feed = ({username}) => {
  const {user} = useContext(AuthContext);
  console.log(user ,"from feed");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axios.get(`http://localhost:5000/pofile/${username}`)
      : await axios.get(`http://localhost:5000/timeline/display/${user._id}`);
      console.log("from feed ===>",res.data);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)- new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username , user._id]);
 
  
  return (
    <div className={feedStyle.feed}>
      <div className={feedStyle.feedWrapper}>
       {username ? username ===user.username &&  <Share /> : <Share/>}
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
