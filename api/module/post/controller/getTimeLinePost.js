const { StatusCodes } = require("http-status-codes");
const { promises } = require("nodemailer/lib/xoauth2");
const postModel = require("../../../model/post.model");
const userModel = require("../../../model/user.model");

const getTimeLinePosts = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await userModel.findOne({
      _id: id,
    });
    if (user) {
      const userPosts = await postModel.find({
        userId: user._id,
      });
      const friendsPosts = await Promise.all(
        user.following.map((friendId) => {
          return postModel.find({
            userId: friendId,
          });
        })
      );
      res.status(StatusCodes.OK).json(userPosts.concat(...friendsPosts));
    } else {
      res.json({
        message: "User Not Found...!",
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};

module.exports = getTimeLinePosts;
