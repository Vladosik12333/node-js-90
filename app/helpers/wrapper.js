const wrapper = (controller) => async (req, res) => {
  try {
    await controller(req, res);
  } catch (error) {
    const { message = "server internal error", status = 500 } = error;
    res.status(status).json({ message });
  }
};

module.exports = wrapper;
