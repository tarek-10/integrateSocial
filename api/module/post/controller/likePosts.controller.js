const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const likesPosts = async (req, res) => {

    let {
        id
    } = req.params;
    // let {
    //     userId
    // } = req.body;
    try {

        const post = await postModel.findById({
            _id: id
        });
        if (post) {

            if (!post.likes.includes(req.user._id)) {
                const updatedpost = await post.updateOne({
                    $push: {
                        likes: req.user._id
                    }
                });
                res.status(StatusCodes.OK).json({
                    message: "success like",
                    updatedpost
                });
            } else {
                const dislikePost = await post.updateOne({
                    $pull: {
                        likes: req.user._id
                    }
                });
                res.status(StatusCodes.OK).json({
                    message: "success disLike",
                    dislikePost
                });
            }
        } else {
            res.json({
                message: "in-valid post"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = likesPosts;