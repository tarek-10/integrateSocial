const {
    StatusCodes
} = require("http-status-codes");
const postModel = require("../../../model/post.model");

const updatingPosts = async (req, res) => {

    let {
        id
    } = req.params;

    let {
        body
    } = req;

    try {

        const post = await postModel.findById({
            _id: id
        });
        if (post) {

            let urls = post.postImage;
            if (req.files) {
                for (let i = 0; i < req.files.length; i++) {
                    urls = [];
                    urls.push(process.env.IMAGE_URLS + req.files[i].filename);
                }
            }
            const updatedpost = await postModel.findOneAndUpdate({
                _id: post._id
            }, {
                $set: body,
                postImage: urls
            }, {
                new: true
            });
            res.status(StatusCodes.OK).json({
                message: "success updated",
                updatedpost
            })
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "in-valid posts"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = updatingPosts;