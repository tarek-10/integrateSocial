const express = require("express");
const isAuthorized = require("../../../middleware/isAuthorized");

const router = express.Router();

const validationResult = require("../../../middleware/vakidationResult");
const {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  GET_POST_BY_ID,
  TIMELINE_POSTS,
  POST_COMMENT,
} = require("../endPoints");
const {
  createPost,
  updatedPost,
  deletePost,
  likePosts,
  getPostById,
  commentPosts,
} = require("../joi/post.validation");

//create post
const creatingPosts = require("../controller/createPosts.controller");
const upload = require("../../../middleware/multer");
router.post(
  "/post/create",
  upload.array("image", 5),
  validationResult(createPost),
  isAuthorized(CREATE_POST),
  creatingPosts
);
//end

//updated post
const updatingPosts = require("../controller/updatePost.controller");
router.put(
  "/post/update/:id",
  upload.array("image", 5),
  validationResult(updatedPost),
  isAuthorized(UPDATE_POST),
  updatingPosts
);
//end

//delete post
const deletedPosts = require("../controller/deletePosts.controller");
router.delete(
  "/post/delete/:id",
  validationResult(deletePost),
  isAuthorized(DELETE_POST),
  deletedPosts
);
//end

//like post
const likesPosts = require("../controller/likePosts.controller");
router.put(
  "/like/:id",
  validationResult(likePosts),
  isAuthorized(LIKE_POST),
  likesPosts
);
//end

//comment on posts
const commentOnPosts = require("../controller/postsComments");
router.post(
  "/post/:id/comment",
  validationResult(commentPosts),
  isAuthorized(POST_COMMENT),
  commentOnPosts
);
//end

//get post by id
const getPostsById = require("../controller/getPosts.controller");
router.get(
  "/post/:id",
  validationResult(getPostById),
  isAuthorized(GET_POST_BY_ID),
  getPostsById
);
//end

//timeLine Posts
const getTimeLinePosts = require("../controller/getTimeLinePost");
router.get("/timeline/display/:id", getTimeLinePosts);
//end

//get user's all posts
const getPostsOfUser = require("../controller/getUserPosts");
router.get("/pofile/:username", getPostsOfUser);
//end

module.exports = router;
