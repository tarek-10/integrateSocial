const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signInUsers = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await userModel.findOne({ email });
    console.log(user);
    if (!user) {
      res.json({
        message: "User Not Found You Should Register Firstly...!",
      });
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            role: user.role,
          },
          process.env.SECRET_KEY
        );

        res.status(StatusCodes.OK).json({
          message: "sucess",
          token,
          data: {
            _id: user._id,
            username: user.username,
            email: user.email,
          },
        });
      } else {
        res.json({
          message: "In-Valid password...!",
        });
      }
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};
module.exports = signInUsers;
