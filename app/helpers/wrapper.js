const wrapper = (controller) => (req, res) => {
  try {
    controller(req, res);
  } catch (error) {
    const { message = "server internal error", status = 500 } = error;
    res.status(status).json({ message });
  }
};

module.exports = wrapper;
