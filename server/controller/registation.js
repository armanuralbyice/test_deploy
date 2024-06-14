const User = require("../model/registationSchema");

exports.postUser = async (req, res) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    user,
  });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
};
