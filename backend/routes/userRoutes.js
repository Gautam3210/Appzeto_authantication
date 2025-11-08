const express = require("express");
const router = express.Router();
const { dashboard, getProfile, updateProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/dashboard", protect, dashboard);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

module.exports = router;
