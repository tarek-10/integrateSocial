const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const getPostsById = async (req, res) => {

    let {
        id
    } = req.params;
    try {
        const post = await postModel.findById({
            _id: id
        });
        res.status(StatusCodes.OK).json({
            message: "success get post",
            post
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = getPostsById;