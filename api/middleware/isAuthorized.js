const {
    StatusCodes
} = require("http-status-codes");
const jwt = require('jsonwebtoken');
const userModel = require("../model/user.model");
const rbac = require("../rbac/rbac");
module.exports = (endPointsName) => {

    return async (req, res, next) => {

        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            if (token) {
                try {
                    const decoded = jwt.verify(token, process.env.SECRET_KEY);
                    const isExist = await userModel.findOne({
                        _id: decoded._id
                    });
                    if (isExist) {
                        req.user = decoded;
                        const isAllowed = await rbac.can(req.user.role, endPointsName);
                        if (isAllowed) {
                            next();
                        } else {
                            res.status(StatusCodes.UNAUTHORIZED).json("UNAUTHORIZED");
                        }
                    } else {
                        res.status(StatusCodes.UNAUTHORIZED).json("UNAUTHORIZED");
                    }
                } catch (error) {
                    res.status(StatusCodes.UNAUTHORIZED).json({
                        message: "UNAUTHORIZED"
                    });
                }
            } else {
                res.status(StatusCodes.UNAUTHORIZED).json({
                    message: "UNAUTHORIZED"
                });
            }
        } else {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: "UNAUTHORIZED"
            });
        }
    }
}