import React, { useEffect, useState } from "react";
import Share from "../Share/Share";
import Posts from "../Posts/Posts";
import feedStyle from "./Feed.module.css";
import axios from "axios";
const Feed = ({username}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axios.get(`http://localhost:5000/pofile/${username}`)
      : await axios.get("http://localhost:5000/timeline/display/6338d8b1d7458849df4b7ae8");
      console.log("from feed ===>",res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username]);
 
  
  return (
    <div className={feedStyle.feed}>
      <div className={feedStyle.feedWrapper}>
        <Share />
        {posts.map((p) => (
          <Posts key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
