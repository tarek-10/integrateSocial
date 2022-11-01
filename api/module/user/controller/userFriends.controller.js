const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");

const userFirendsFun = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await userModel.findOne({ _id: userId });

    if (user) {
      const friends = await Promise.all(
        user.following.map((friendId) => {
          return userModel.findById(friendId);
        })
      );

      let firndsList = [];
      friends.map((frend) => {
        const { _id, username, profilePicture } = frend;

        firndsList.push({ _id, username, profilePicture });
      });

      res.status(StatusCodes.OK).json({ message: "success", firndsList });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User Not Found ...!" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = userFirendsFun;
