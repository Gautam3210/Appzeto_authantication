const User = require("../models/User");

exports.dashboard = async (req, res) => {
  const usersCount = await User.countDocuments();
  res.json({ message: "Admin Dashboard", totalUsers: usersCount });
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};
