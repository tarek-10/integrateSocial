const express = require("express");

const router = express.Router();
const validationResult = require("../../../middleware/vakidationResult");
const isAuthorized = require("../../../middleware/isAuthorized");
const {
  registerUser,
  signInUser,
  updateUser,
  deleteUsers,
  getUserById,
  followUsers,
  unfollowUser,
} = require("../joi/user.validation");
const upload = require("../../../middleware/multer");
//register user
const userRegisteration = require("../controller/userSignup.controller");
router.post(
  "/register",
  upload.array("image", 5),
  validationResult(registerUser),
  userRegisteration
);
//end

//verify email registered
const verifyUserMail = require("../controller/verifyUser.controller");
router.get("/verify/:token", verifyUserMail);
//end

//sign in
const signInUsers = require("../controller/signInUser.controller");
const {
  UPDATE_USERS,
  DELETE_USERS,
  GET_USER_BY_ID,
  FOLLOW_USER,
  UNFOLLOW_USER,
} = require("../endPoints");
router.post("/user/signin", validationResult(signInUser), signInUsers);
//end

//update user
const updatingUsers = require("../controller/updateUser.controller");
router.put(
  "/user/update/:id",
  upload.array("image", 5),
  validationResult(updateUser),
  isAuthorized(UPDATE_USERS),
  updatingUsers
);
//end

//delete user
const deleteingUsers = require("../controller/deleteingUser");
router.delete(
  "/user/delete/:id",
  validationResult(deleteUsers),
  isAuthorized(DELETE_USERS),
  deleteingUsers
);
//end

// get user by id
const getUsersById = require("../controller/getUserById.controller");
router.get("/user/:id", validationResult(getUserById), getUsersById);
//end
// get user by query
const getUsersByQueryFun = require("../controller/getUserByQuery");
router.get("/user", getUsersByQueryFun);
//end

//follow user
const followingUsers = require("../controller/followUser.controller");
router.put(
  "/follow/:id",
  validationResult(followUsers),
  isAuthorized(FOLLOW_USER),
  followingUsers
);
//end

//unfollow user
const unfollowusers = require("../controller/unfollowUsers.controller");
router.put(
  "/unfollow/:id",
  validationResult(unfollowUser),
  isAuthorized(UNFOLLOW_USER),
  unfollowusers
);
//end

module.exports = router;
