const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require("../../../middleware/sendEmail");
const userRegisteration = async (req, res) => {

    let {
        username,
        email,
        password,
    } = req.body;

    let URLS = [];
    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            URLS.push(process.env.IMAGE_URLS + req.files[i].filename);
        }
    }
    try {

        const user = await userModel.findOne({
            email
        });
        if (user) {
            res.json({
                message: "this email is already exist...!"
            });
        } else {
            let token = jwt.sign(email, process.env.SECRET_KEY);
            let message = `<a href='http://localhost:5000/verify/${token}'>verify your registeration</a>`
            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) throw err;
                const registerUser = await userModel.insertMany({
                    username,
                    email,
                    password: hash,
                    profilePicture: URLS,
                });
                res.status(StatusCodes.CREATED).json({
                    message: "success",
                    registerUser
                });
            });
            await sendEmail(email, message);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        })
    }


}
module.exports = userRegisteration;