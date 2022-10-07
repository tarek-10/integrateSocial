const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const deletedPosts = async (req, res) => {

    let {
        id
    } = req.params;
    try {
        const post = await postModel.findById({
            _id: id
        });
        if (post) {
            const deletingPost = await postModel.findOneAndDelete({
                _id: post._id
            });
            res.status(StatusCodes.OK).json({
                message: "success",
                deletingPost
            });

        } else {
            res.json({
                message: "Post Not Found...!"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = deletedPosts;