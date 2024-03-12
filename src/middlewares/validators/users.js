import Joi from "joi";

export const getUsersValidator = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().optional(),
  });

  try {
    await schema.validateAsync(req.query);
    next();
  } catch (err) {
    console.error(err);
    return res.status(400).json(err.details[0].message);
  }
};
