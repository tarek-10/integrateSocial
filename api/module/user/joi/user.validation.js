const Joi = require("joi");

module.exports = {
  registerUser: {
    body: Joi.object()
      .required()
      .keys({
        username: Joi.string().required().min(3).max(20),
        email: Joi.string().required().max(50).email(),
        password: Joi.string().min(3).max(15).required().label("Password"),
        password_confirmation: Joi.any()
          .equal(Joi.ref("password"))
          .required()
          .label("Confirm password")
          .options({
            messages: {
              "any.only": "{{#label}} does not match",
            },
          }),
      }),
    files: Joi.object().optional(),
  },
  signInUser: {
    body: Joi.object()
      .required()
      .keys({
        email: Joi.string().required().max(50).email(),
        password: Joi.string().min(3).max(15).required().label("Password"),
      }),
  },
  updateUser: {
    params: Joi.object().required().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object()
      .required()
      .keys({
        username: Joi.string().optional().min(3).max(20),
        email: Joi.string().optional().max(50).email(),
        password: Joi.string().min(3).max(15).optional(),
        desc: Joi.string().optional(),
        city: Joi.string().optional(),
        from: Joi.string().optional(),
        relationship: Joi.number().optional(),
      }),
    files: Joi.object().optional(),
  },
  deleteUsers: {
    params: Joi.object().required().keys({
      id: Joi.string().required(),
    }),
  },
  getUserById: {
    params: Joi.object().required().keys({
      id: Joi.string().required(),
    }),
  },
  followUsers: {
    params: Joi.object().required().keys({
      id: Joi.string().required(),
    }),
  },
  unfollowUser: {
    params: Joi.object().required().keys({
      id: Joi.string().required(),
    }),
  },
  firendsSchema: {
    params: Joi.object().required().keys({
      userId: Joi.string().required(),
    }),
  },
};
