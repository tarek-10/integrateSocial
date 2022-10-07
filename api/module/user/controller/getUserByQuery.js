const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");

const getUsersByQueryFun = async (req, res) => {
  try {
    const { userId, username } = req.query;

    const user = userId
      ? await userModel.findById({ _id: userId })
      : await userModel.findOne({ username });
    const { password, updatedAt, ...other } = user._doc;
    res.status(StatusCodes.OK).json(other);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};
module.exports = getUsersByQueryFun;
