const { StatusCodes } = require("http-status-codes");
const postModel = require("../../../model/post.model");
const userModel = require("../../../model/user.model");

const getPostsOfUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userModel.findOne({ username });
    if (user) {
      const posts = await postModel.find({ userId: user._id });
      res.status(StatusCodes.OK).json(posts);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "User Not Found...!" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = getPostsOfUser;
