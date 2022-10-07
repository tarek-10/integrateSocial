const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");

const getUsersById = async (req, res) => {
  let { id } = req.params;

  try {
    const user = await userModel.findById({
      _id: id,
    });
    const { password, updatedAt, ...other } = user._doc;
    res.status(StatusCodes.OK).json(other);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};
module.exports = getUsersById;
