import Joi from "joi";

export const validateLoginBody = async (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().trim().optional(),
    email: Joi.string().optional(),
    password: Joi.string().required(),
  }).xor("username", "email");

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.error(`Error validating login payload: ${err}`);
    res.status(400).json(err.details[0].message);
  }
};

export const validateRegisterBody = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    displayName: Joi.string().optional(),
    username: Joi.string()
      .min(2)
      .max(32)
      .regex(/^[a-zA-Z0-9-_]+$/)
      .message(
        "Username must between 2 to 32 characters long and contain only letters or numbers or underscores."
      )
      .required(),
    password: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json(err.details[0].message);
  }
};

export const validateUsernameBody = async (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    console.error(err);
    res.status(400).json(err.details[0].message);
  }
};
