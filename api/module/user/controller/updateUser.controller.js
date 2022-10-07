const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require("bcrypt");
const updatingUsers = async (req, res) => {
  let { id } = req.params;
  let { body } = req;

  try {
    const user = await userModel.findOne({
      _id: id,
    });
    if (user) {
      if (body.password) {
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
      }
      let urls = [];
      if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
          urls.push(process.env.IMAGE_URLS + req.files[i].filename);
        }
      }
      const upsatedUser = await userModel.findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          coverPicture: urls,
          $set: body,
        },
        {
          new: true,
        }
      );
      res.status(StatusCodes.OK).json({
        message: "success",
        upsatedUser,
      });
    } else {
      res.json({
        message: "User Not Found",
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};
module.exports = updatingUsers;
