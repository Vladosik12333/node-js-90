const wrapper = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    next(error);
  }
};

module.exports = wrapper;
