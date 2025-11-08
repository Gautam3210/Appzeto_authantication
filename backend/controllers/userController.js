const User = require('../models/User')

exports.dashboard = (req, res) => {
  res.json({ message: `Welcome ${req.user.name} to your dashboard` });
};

exports.getProfile = (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  const user = req.user;
  user.name = req.body.name || user.name;
  if (req.body.password) user.password = req.body.password;
  await user.save();
  res.json({ message: "Profile updated", user });
};



