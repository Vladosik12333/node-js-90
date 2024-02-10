const validationParams = (schema) => async (req, _, next) => {
  try {
    await schema.validateAsync(req?.params);
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = validationParams;
