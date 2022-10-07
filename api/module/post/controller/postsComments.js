const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const commentOnPosts = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        desc
    } = req.body;
    try {
        const post = await postModel.findOne({
            _id: id
        });
        if (!post) {
            res.json({
                message: "in-valid post"
            })
        } else {

            post.comment.push({
                userId: req.user._id,
                desc
            });
            const updatedPost = await postModel.findByIdAndUpdate({
                _id: post._id
            }, {
                comment: post.comment
            }, {
                new: true
            });
            // const updatedPost = await post.updateOne({
            //     $push: {
            //         comment: {
            //             desc,
            //             userId: req.user._id
            //         }
            //     }
            // });
            res.status(StatusCodes.OK).json({
                message: "success create comment",
                updatedPost
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = commentOnPosts;