const Joi = require('joi');

module.exports = {
    createPost: {
        body: Joi.object().required().keys({
            userId: Joi.string().required(),
            desc: Joi.string().required(),
        }),
        file: Joi.object().optional()
    },
    updatedPost: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    deletePost: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    likePosts: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    commentPosts: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    getPostById: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    }
}