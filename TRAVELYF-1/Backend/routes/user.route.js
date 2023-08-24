let mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  express = require("express"),
  router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../models/user");

let userSchema = require("../models/user");

router.route("/signup").post(async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password

    const newUser = {
      Username: req.body.Username,

      email: req.body.email,

      password: hashedPassword,

      mobile: req.body.mobile,

      answer: req.body.answer, // Add the answer field
    };

    const user = await userSchema.create(newUser);

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
    });
  } catch (error) {
    // Handle the error differently, sending the error message

    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
});
router.post("/forgot-password", async (req, res, next) => {
  const { email, answer } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Check if the provided answer matches the stored answer

    if (user.answer === answer) {
      // Here, you might generate a reset token and send it via email

      // For now, let's just respond with a success message

      return res.json({ message: "Answer is correct. Reset token sent." });
      
    } else {
      return res.json({ message: "Incorrect answer." });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
