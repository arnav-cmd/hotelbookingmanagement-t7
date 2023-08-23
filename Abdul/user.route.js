const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user"); 

router.get("/MyProfilePage", async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; 
  try {
    const decodedToken = jwt.verify(token, "12345"); 
    const userId = decodedToken.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      Username: user.Username,
      email: user.email,
      mobile: user.mobile,
    });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = router;
