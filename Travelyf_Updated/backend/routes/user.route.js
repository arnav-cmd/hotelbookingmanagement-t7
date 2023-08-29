let mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  express = require("express"),
  router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../models/user");

let userSchema = require("../models/user");

router.route("/signup").post(async (req, res, next) => {
  try {
    const user = await userSchema.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
router.route("/").get((req, res) => {
  userSchema
    .find()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      next(error);
    });
});
router.route("/get-user/:id").get((req, res, next) => {
  userSchema
    .findById(req.params.id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      next(error);
    });
});
router.route("/update-user/:id").put((req, res, next) => {
  userSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((hotel) => {
      res.json(hotel);
      console.log("Hotel data updated!!!");
    })
    .catch((error) => {
      next(error);
    });
});
router.route("/delete-user/:id").put((req, res, next) => {
  userSchema
    .findByIdAndRemove(req.params.id)
    .then((user) => {
      console.log("User deleted!!!");
    })
    .catch((error) => {
      next(error);
    });
});
router.get("/MyProfilePage", async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, "12345"); // Replace with your actual secret key

    const userId = decodedToken.userId;

    const user = await userSchema.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      Username: user.Username,

      email: user.email,

      mobile: user.mobile,

      answer: user.answer,
    });
  } catch (error) {
    // Handle the error differently, sending the error message

    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
});

router.put("/update-profile", async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  const editedUser = req.body;

  console.log("Edited User:", editedUser);

  try {
    const decodedToken = jwt.verify(token, "12345");

    const userId = decodedToken.userId;

    console.log(userId);

    const user = await userSchema.findByIdAndUpdate(
      userId,
      { Username: editedUser.username, ...editedUser },
      {
        new: true,
      }
    );

    console.log("Updated User:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      Username: user.Username,

      email: user.email,

      mobile: user.mobile,

      answer: user.answer,
    });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
});
router.post("/forgot-password", async (req, res, next) => {
  const { email, securityAnswer } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }
    // Trim and convert both answers to lowercase for case-insensitive comparison
    const isAnswerValid =
      user.answer.toLowerCase() === securityAnswer.toLowerCase();

    if (isAnswerValid) {
      return res.json({ message: "Answer is correct." });
    } else {
      return res.json({ message: "Incorrect answer." });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/reset-password", async (req, res, next) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;

    await User.updateOne({ _id: user._id }, { password: hashedNewPassword });

    return res.json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
