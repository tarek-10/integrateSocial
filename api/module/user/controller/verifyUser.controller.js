const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require('jsonwebtoken');
const verifyUserMail = async (req, res) => {

    let {
        token
    } = req.params;
    try {
        if (token) {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            console.log(decoded);
            const user = await userModel.findOne({
                email: decoded
            });
            if (!user) {
                res.json({
                    message: "You Should Register first...!"
                });
            } else {
                if (user.isVerify == true) {
                    res.json({
                        message: "this email is already confirmed...!"
                    });
                } else {
                    const verifiedEmail = await userModel.findOneAndUpdate({
                        email: user.email
                    }, {
                        isVerify: true
                    }, {
                        new: true
                    });
                    res.status(StatusCodes.OK).json({
                        message: "Email Confirmed Successfully...!",
                        verifiedEmail
                    });
                }
            }
        } else {
            res.json({
                message: "you must registered firstly...!"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = verifyUserMail;