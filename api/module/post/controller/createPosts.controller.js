const { StatusCodes } = require("http-status-codes");
const postModel = require("../../../model/post.model");

const creatingPosts = async (req, res) => {
  let { userId, desc } = req.body;

  try {
    let urls = [];
    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        urls.push(process.env.IMAGE_URLS + req.files[i].filename);
      }
    }
    let test = desc;
    if (!req.body.desc) {
      test = "";
    }
    const post = await postModel.insertMany({
      userId,
      desc: test,
      postImage: urls,
    });

    res.status(StatusCodes.CREATED).json({
      message: "success",
      post,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "error",
      error,
    });
  }
};
module.exports = creatingPosts;
