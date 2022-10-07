const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const deleteingUsers = async (req, res) => {

    let {
        id
    } = req.params;

    try {
        const deleteUser = await userModel.deleteOne({
            _id: id
        });
        res.status(StatusCodes.OK).json({
            message: "success",
            deleteUser
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error"
        });
    }
}
module.exports = deleteingUsers;