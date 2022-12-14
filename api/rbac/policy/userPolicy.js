const {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  GET_POST_BY_ID,
  TIMELINE_POSTS,
  POST_COMMENT,
} = require("../../module/post/endPoints");
const {
  GET_ALL_USERS,
  UPDATE_USERS,
  DELETE_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  USER_FRIENDS,
} = require("../../module/user/endPoints");

module.exports = [
  GET_ALL_USERS,
  UPDATE_USERS,
  DELETE_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  GET_POST_BY_ID,
  TIMELINE_POSTS,
  POST_COMMENT,
  USER_FRIENDS,
];
